import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreditSource, CreditTransactionType } from '../../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreditBalanceDto } from './dto/req/credit-balance.dto.js';
import { CreditTransactionResponseDto } from './dto/res/credit-transaction.res.dto.js';

export interface AllocateCreditsParams {
    userId: string;
    amount: number;
    source: CreditSource;
    subscriptionId?: string;
    addonPurchaseId?: string;
    expiresAt?: Date;
    description?: string;
}

export interface ConsumeCreditsParams {
    userId: string;
    amount: number;
    description?: string;
    referenceId?: string;
}

@Injectable()
export class CreditService {
    constructor(private readonly prisma: PrismaService) { }

    /**
     * Initialize a credit account for the user if it doesn't exist
     */
    async getOrCreateCreditAccount(userId: string) {
        let account = await this.prisma.creditAccount.findUnique({
            where: { userId },
        });

        if (!account) {
            account = await this.prisma.creditAccount.create({
                data: {
                    userId,
                    subscriptionBalance: 0,
                    addonBalance: 0,
                },
            });
        }

        return account;
    }

    /**
     * Get the current credit balance of the user, including subscription and addon balances.
     */
    async getBalance(userId: string): Promise<CreditBalanceDto> {
        const account = await this.getOrCreateCreditAccount(userId);
        return {
            subscriptionBalance: account.subscriptionBalance,
            addonBalance: account.addonBalance,
            totalBalance: account.subscriptionBalance + account.addonBalance,
        };
    }

    /**
     * Allocate credits to the user's account (from Subscription or Addon purchases)
     */
    async allocateCredits(params: AllocateCreditsParams) {
        const {
            userId,
            amount,
            source,
            subscriptionId,
            addonPurchaseId,
            expiresAt,
            description,
        } = params;

        if (amount <= 0) {
            throw new BadRequestException(
                'Allocation amount must be greater than 0',
            );
        }

        return this.prisma.$transaction(async (tx) => {
            let account = await tx.creditAccount.findUnique({
                where: { userId },
            });

            if (!account) {
                account = await tx.creditAccount.create({
                    data: {
                        userId,
                        subscriptionBalance: 0,
                        addonBalance: 0,
                    },
                });
            }

            const balanceBefore = account.subscriptionBalance + account.addonBalance;
            const isSubscription = source === CreditSource.SUBSCRIPTION;

            // Subscription credit cũ không được rollover sang tháng mới
            if (isSubscription) {
                await tx.creditAllocation.updateMany({
                    where: {
                        creditAccountId: account.id,
                        source: CreditSource.SUBSCRIPTION,
                        remainingAmount: {
                            gt: 0,
                        },
                    },
                    data: {
                        remainingAmount: 0,
                    },
                });
            }

            const updatedAccount = await tx.creditAccount.update({
                where: {
                    id: account.id,
                },
                data: {
                    subscriptionBalance: isSubscription ? amount : undefined,
                    addonBalance: !isSubscription ? { increment: amount } : undefined,
                },
            });

            const balanceAfter = updatedAccount.subscriptionBalance + updatedAccount.addonBalance;

            const allocation = await tx.creditAllocation.create({
                data: {
                    creditAccountId: account.id,
                    source,
                    totalAmount: amount,
                    remainingAmount: amount,
                    expiresAt,
                    subscriptionId,
                    addonPurchaseId,
                },
            });

            const transaction = await tx.creditTransaction.create({
                data: {
                    creditAccountId: account.id,
                    amount,
                    type: isSubscription
                        ? CreditTransactionType.SUBSCRIPTION_ALLOCATION
                        : CreditTransactionType.ADDON_PURCHASE,
                    balanceBefore,
                    balanceAfter,
                    description:
                        description ||
                        `Allocated ${amount} credits from ${source}`,
                    creditAllocationId: allocation.id,
                    addonPurchaseId,
                },
            });

            return {
                account: updatedAccount,
                allocation,
                transaction,
            };
        });
    }


    async consumeCredits(params: ConsumeCreditsParams) {
        const { userId, amount, description, referenceId } = params;

        if (amount <= 0) {
            throw new BadRequestException('Consume amount must be greater than 0');
        }

        return this.prisma.$transaction(async (tx) => {
            const account = await tx.creditAccount.findUnique({
                where: { userId },
            });

            if (!account) {
                throw new NotFoundException('Credit account not found');
            }

            const balanceBefore = account.subscriptionBalance + account.addonBalance;
            if (balanceBefore < amount) {
                throw new BadRequestException(
                    `Insufficient credits. Required: ${amount}, Available: ${balanceBefore}`,
                );
            }

            // Tính số lượng trừ từ subscriptionBalance và addonBalance
            let deductSubscription = 0;
            let deductAddon = 0;

            if (account.subscriptionBalance >= amount) {
                deductSubscription = amount;
            } else {
                deductSubscription = account.subscriptionBalance;
                deductAddon = amount - deductSubscription;
            }

            // Cập nhật số dư tài khoản
            const updatedAccount = await tx.creditAccount.update({
                where: { id: account.id },
                data: {
                    subscriptionBalance: { decrement: deductSubscription },
                    addonBalance: deductAddon > 0 ? { decrement: deductAddon } : undefined,
                },
            });

            // Trừ lần lượt từ các đợt Allocation còn hạn
            let remainingToDeduct = amount;
            const activeAllocations = await tx.creditAllocation.findMany({
                where: {
                    creditAccountId: account.id,
                    remainingAmount: { gt: 0 },
                },
                orderBy: [
                    { expiresAt: 'asc' },
                    { createdAt: 'asc' },
                ],
            });

            for (const alloc of activeAllocations) {
                if (remainingToDeduct <= 0) break;

                const deductFromThisAlloc = Math.min(alloc.remainingAmount, remainingToDeduct);
                await tx.creditAllocation.update({
                    where: { id: alloc.id },
                    data: {
                        remainingAmount: { decrement: deductFromThisAlloc },
                    },
                });

                remainingToDeduct -= deductFromThisAlloc;
            }

            const balanceAfter = updatedAccount.subscriptionBalance + updatedAccount.addonBalance;

            // Ghi nhật ký giao dịch tiêu thụ
            const transaction = await tx.creditTransaction.create({
                data: {
                    creditAccountId: account.id,
                    amount: -amount,
                    type: CreditTransactionType.CONSUMPTION,
                    balanceBefore,
                    balanceAfter,
                    description: description || `Consumed ${amount} credits`,
                    referenceId,
                },
            });

            return {
                balanceBefore,
                balanceAfter,
                consumed: amount,
                transaction,
            };
        });
    }


    async getTransactionHistory(userId: string, limit = 50): Promise<CreditTransactionResponseDto[]> {
        const account = await this.prisma.creditAccount.findUnique({
            where: { userId },
        });

        if (!account) {
            return [];
        }

        const transactions = await this.prisma.creditTransaction.findMany({
            where: { creditAccountId: account.id },
            orderBy: { createdAt: 'desc' },
            take: limit,
        });

        return transactions.map((t) => ({
            id: t.id,
            amount: t.amount,
            type: t.type,
            description: t.description,
            balanceBefore: t.balanceBefore,
            balanceAfter: t.balanceAfter,
            referenceId: t.referenceId,
            createdAt: t.createdAt,
        }));
    }
}
