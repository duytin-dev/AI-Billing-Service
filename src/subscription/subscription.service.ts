import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service.js';
import { StripeService } from '../stripe/stripe.service.js';
import { CreditTransactionType, SubscriptionStatus } from '../../generated/prisma/client.js';

@Injectable()
export class SubscriptionService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly stripeService: StripeService,
        private readonly configService: ConfigService,
    ) { }

    async createCheckout(userId: string, subscriptionPriceId: string,) {

        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { stripeCustomerId: true },
        });

        if (!user) {
            throw new NotFoundException('User not found');
        }

        if (!user.stripeCustomerId) {
            throw new BadRequestException('User has no Stripe customer');
        }

        const price = await this.prisma.subscriptionPrice.findUnique({
            where: { id: subscriptionPriceId },
            include: { subscriptionPlan: true },
        });

        if (
            !price ||
            !price.isActive ||
            !price.subscriptionPlan.isActive ||
            !price.stripePriceId
        ) {
            throw new BadRequestException('Subscription price unavailable');
        }
        const existingSubscription =
            await this.prisma.subscription.findFirst({
                where: {
                    userId,
                    status: {
                        in: [
                            SubscriptionStatus.ACTIVE
                        ],
                    },
                },
            });

        if (existingSubscription) {
            throw new BadRequestException(
                'You already have an active subscription',
            );
        }
        const session = await this.stripeService.client.checkout.sessions.create({
            mode: 'subscription',
            customer: user.stripeCustomerId,
            line_items: [
                {
                    price: price.stripePriceId,
                    quantity: 1,
                },
            ],
            client_reference_id: userId,
            subscription_data: {
                metadata: {
                    userId,
                    subscriptionPriceId: price.id,
                },
            },
            success_url:
                this.configService.getOrThrow<string>(
                    'STRIPE_CHECKOUT_SUCCESS_URL',
                ),
            cancel_url:
                this.configService.getOrThrow<string>(
                    'STRIPE_CHECKOUT_CANCEL_URL',
                ),
        });

        return {
            sessionId: session.id,
            url: session.url,
        };
    }
    async subscribeFree(userId: string) {
        // Check free plan availability
        const freePrice = await this.prisma.subscriptionPrice.findFirst({
            where: {
                price: 0,
                isActive: true,
                subscriptionPlan: {
                    name: 'FREE',
                    isActive: true,
                },
            },
            include: {
                subscriptionPlan: true,
            },
        });

        if (!freePrice) {
            throw new NotFoundException(
                'Free plan not found',
            );
        }
        // Check if user already has an active subscription
        const existingSubscription = await this.prisma.subscription.findFirst({
            where: {
                userId,
                status: {
                    in: [
                        SubscriptionStatus.ACTIVE,
                    ],
                },
            },
        });

        if (existingSubscription) {
            throw new BadRequestException(
                'You already have an active subscription',
            );
        }

        const now = new Date();
        const nextMonth = new Date(now);
        nextMonth.setMonth(nextMonth.getMonth() + 1,);

        return this.prisma.$transaction(
            async (tx) => {
                const subscription = await tx.subscription.create({
                    data: {
                        userId,
                        subscriptionPriceId: freePrice.id,
                        status: SubscriptionStatus.ACTIVE,
                        startedAt: now,
                        currentPeriodStart: now,
                        currentPeriodEnd: nextMonth,
                        nextCreditRefillAt: nextMonth,
                    },
                });

                const oldAccount = await tx.creditAccount.findUnique({
                    where: {
                        userId,
                    },
                });

                const balanceBefore = (oldAccount?.subscriptionBalance ?? 0) + (oldAccount?.addonBalance ?? 0);

                const creditAccount = await tx.creditAccount.upsert({
                    where: {
                        userId,
                    },

                    create: {
                        userId,
                        subscriptionId: subscription.id,
                        subscriptionBalance: freePrice.monthlyCredits,
                        addonBalance: 0,
                        subscriptionCreditExpiresAt: nextMonth,
                    },

                    update: {
                        subscriptionId: subscription.id,
                        subscriptionBalance: freePrice.monthlyCredits,
                        subscriptionCreditExpiresAt: nextMonth,
                    },
                });

                await tx.creditTransaction.create({
                    data: {
                        creditAccountId: creditAccount.id,
                        amount: freePrice.monthlyCredits - balanceBefore,
                        type: CreditTransactionType.SUBSCRIPTION_ALLOCATION,
                        balanceBefore,
                        balanceAfter: freePrice.monthlyCredits,
                        description: 'Free plan subscription credits',
                        referenceId: subscription.id,
                    },
                });

                return subscription;
            },
        );
    }
}
