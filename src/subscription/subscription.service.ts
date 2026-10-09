import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service.js';
import { StripeService } from '../stripe/stripe.service.js';
import { BillingCycle, CreditTransactionType, SubscriptionStatus } from '../../generated/prisma/client.js';
import { UpgradeSubscriptionResponseDto } from './dto/res/upgrade-subscription.res.dto.js';
import { ChangePlanResponseDto } from './dto/res/change-plan.res.dto.js';

@Injectable()
export class SubscriptionService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly stripeService: StripeService,
        private readonly configService: ConfigService,
    ) { }

    async createCheckout(userId: string, subscriptionPriceId: string,) {
        // 1. Find the user by ID and get their Stripe customer ID
        const user = await this.prisma.user.findUnique({
            where: {
                id: userId,
            },
            select: {
                stripeCustomerId: true,
            },
        });

        if (!user) {
            throw new NotFoundException('User not found');
        }

        if (!user.stripeCustomerId) {
            throw new BadRequestException(
                'User has no Stripe customer',
            );
        }

        // Search for the subscription price and its associated plan
        const price = await this.prisma.subscriptionPrice.findUnique({
            where: {
                id: subscriptionPriceId,
            },
            include: {
                subscriptionPlan: true,
            },
        });

        if (!price || !price.isActive || !price.subscriptionPlan.isActive || !price.stripePriceId
        ) {
            throw new BadRequestException(
                'Subscription price unavailable',
            );
        }

        // Check if the user already has an active subscription
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
        // Create a Stripe Checkout session for the subscription
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

            // This option allows Stripe to automatically collect payment methods if required for the subscription. If the subscription requires a payment method, Stripe will prompt the user to provide one during the checkout process.
            payment_method_collection: 'if_required',
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

    async upgradeSubscription(userId: string, newSubscriptionPriceId: string): Promise<UpgradeSubscriptionResponseDto> {
        // 1. Subscription hiện tại
        const currentSubscription =
            await this.prisma.subscription.findFirst({
                where: {
                    userId,
                    status: SubscriptionStatus.ACTIVE,
                },
                include: {
                    subscriptionPrice: {
                        include: {
                            subscriptionPlan: true,
                        },
                    },
                },
            });

        if (!currentSubscription) {
            throw new BadRequestException(
                'No active subscription found',
            );
        }

        // 2. Chỉ FREE mới dùng flow này
        if (
            currentSubscription.subscriptionPrice
                .subscriptionPlan.name.toUpperCase() !== 'FREE'
        ) {
            throw new BadRequestException(
                'Only FREE subscription can use this upgrade flow',
            );
        }

        if (!currentSubscription.stripeSubscriptionId) {
            throw new BadRequestException(
                'Stripe subscription not found',
            );
        }

        // 3. Price PRO muốn nâng lên
        const newPrice =
            await this.prisma.subscriptionPrice.findUnique({
                where: {
                    id: newSubscriptionPriceId,
                },
                include: {
                    subscriptionPlan: true,
                },
            });

        if (
            !newPrice ||
            !newPrice.isActive ||
            !newPrice.subscriptionPlan.isActive ||
            !newPrice.stripePriceId
        ) {
            throw new BadRequestException(
                'Subscription price unavailable',
            );
        }

        if (
            newPrice.subscriptionPlan.name.toUpperCase() === 'FREE'
        ) {
            throw new BadRequestException(
                'You are already on the FREE plan',
            );
        }

        // 4. Lấy subscription thật trên Stripe
        const stripeSubscription =
            await this.stripeService.client.subscriptions.retrieve(
                currentSubscription.stripeSubscriptionId,
            );

        const subscriptionItem =
            stripeSubscription.items.data[0];

        if (!subscriptionItem) {
            throw new BadRequestException(
                'Stripe subscription item not found',
            );
        }

        // 5. Yêu cầu FREE -> PRO
        // Nhưng chỉ apply khi payment thành công
        const updatedSubscription =
            await this.stripeService.client.subscriptions.update(
                currentSubscription.stripeSubscriptionId,
                {
                    items: [
                        {
                            id: subscriptionItem.id,
                            price: newPrice.stripePriceId,
                        },
                    ],

                    payment_behavior: 'default_incomplete',

                    proration_behavior: 'always_invoice',
                    payment_settings: {
                        payment_method_types: ['card'],
                        save_default_payment_method: 'on_subscription',
                    },

                    expand: ['latest_invoice'],
                },
            );

        // 6. Lấy invoice Stripe vừa tạo
        if (!updatedSubscription.latest_invoice) {
            throw new BadRequestException(
                'Upgrade invoice was not created',
            );
        }

        const invoice =
            typeof updatedSubscription.latest_invoice === 'string'
                ? await this.stripeService.client.invoices.retrieve(
                    updatedSubscription.latest_invoice,
                )
                : updatedSubscription.latest_invoice;

        if (!invoice.hosted_invoice_url) {
            throw new BadRequestException(
                'Invoice payment URL not available',
            );
        }

        // 7. Chưa update DB sang PRO
        // Chỉ trả URL cho user thanh toán
        return {
            invoiceId: invoice.id,
            paymentUrl: invoice.hosted_invoice_url,
            amountDue: invoice.amount_due,
            currency: invoice.currency,
            status: invoice.status,
        };
    }
    async changePlan(
        userId: string,
        newSubscriptionPriceId: string,
    ): Promise<ChangePlanResponseDto> {
        // 1. Subscription hiện tại
        const currentSubscription =
            await this.prisma.subscription.findFirst({
                where: {
                    userId,
                    status: SubscriptionStatus.ACTIVE,
                },
                include: {
                    subscriptionPrice: {
                        include: {
                            subscriptionPlan: true,
                        },
                    },
                },
            });

        if (!currentSubscription) {
            throw new BadRequestException(
                'No active subscription found',
            );
        }

        const currentPrice =
            currentSubscription.subscriptionPrice;

        const currentPlan =
            currentPrice.subscriptionPlan;

        // 2. FREE không được dùng change-plan
        if (currentPlan.name.toUpperCase() === 'FREE') {
            throw new BadRequestException(
                'FREE subscription must use the upgrade flow',
            );
        }

        // 3. Price mới
        const newPrice =
            await this.prisma.subscriptionPrice.findUnique({
                where: {
                    id: newSubscriptionPriceId,
                },
                include: {
                    subscriptionPlan: true,
                },
            });

        if (
            !newPrice ||
            !newPrice.isActive ||
            !newPrice.subscriptionPlan.isActive ||
            !newPrice.stripePriceId
        ) {
            throw new BadRequestException(
                'Subscription price unavailable',
            );
        }

        // 4. Không đổi sang FREE bằng API này
        if (
            newPrice.subscriptionPlan.name.toUpperCase() ===
            'FREE'
        ) {
            throw new BadRequestException(
                'Use downgrade flow to move to FREE',
            );
        }

        // 5. Change plan chỉ đổi price trong cùng Plan
        if (
            newPrice.subscriptionPlanId !==
            currentPrice.subscriptionPlanId
        ) {
            throw new BadRequestException(
                'The new price must belong to the current plan',
            );
        }

        // 6. PRO MONTHLY -> chính PRO MONTHLY hiện tại
        if (newPrice.id === currentPrice.id) {
            throw new BadRequestException(
                'You are already using this subscription price',
            );
        }

        // 7. Tạm thời chưa xử lý ANNUALLY -> MONTHLY ngay
        if (
            currentPrice.billingCycle ===
            BillingCycle.ANNUALLY &&
            newPrice.billingCycle === BillingCycle.MONTHLY
        ) {
            throw new BadRequestException(
                'ANNUALLY to MONTHLY must be scheduled at period end',
            );
        }

        // 8. Chỉ xử lý MONTHLY -> ANNUALLY ở flow này
        if (
            currentPrice.billingCycle !==
            BillingCycle.MONTHLY ||
            newPrice.billingCycle !== BillingCycle.ANNUALLY
        ) {
            throw new BadRequestException(
                'Unsupported plan change',
            );
        }

        if (!currentSubscription.stripeSubscriptionId) {
            throw new BadRequestException(
                'Stripe subscription not found',
            );
        }

        // 9. Lấy Subscription thật trên Stripe
        const stripeSubscription =
            await this.stripeService.client.subscriptions.retrieve(
                currentSubscription.stripeSubscriptionId,
            );

        const subscriptionItem =
            stripeSubscription.items.data[0];

        if (!subscriptionItem) {
            throw new BadRequestException(
                'Stripe subscription item not found',
            );
        }

        // 10. MONTHLY -> ANNUALLY
        const updatedSubscription =
            await this.stripeService.client.subscriptions.update(
                currentSubscription.stripeSubscriptionId,
                {
                    items: [
                        {
                            id: subscriptionItem.id,
                            price: newPrice.stripePriceId,
                        },
                    ],

                    payment_behavior: 'pending_if_incomplete',

                    proration_behavior: 'always_invoice',

                    metadata: {
                        userId,
                        subscriptionPriceId: newPrice.id,
                        action: 'CHANGE_PLAN',
                    },

                    expand: ['latest_invoice'],
                },
            );

        let invoiceId: string | null = null;
        let paymentUrl: string | null = null;
        let amountDue: number | null = null;
        let currency: string | null = null;

        if (updatedSubscription.latest_invoice) {
            const invoice =
                typeof updatedSubscription.latest_invoice ===
                    'string'
                    ? await this.stripeService.client.invoices.retrieve(
                        updatedSubscription.latest_invoice,
                    )
                    : updatedSubscription.latest_invoice;

            invoiceId = invoice.id;
            paymentUrl = invoice.hosted_invoice_url ?? null;
            amountDue = invoice.amount_due;
            currency = invoice.currency;
        }
        return {
            subscriptionId: updatedSubscription.id,
            invoiceId,
            paymentUrl,
            amountDue,
            currency,
            pending: updatedSubscription.pending_update !== null,
        };
    }
    async cancelSubscription(userId: string) {
        const currentSubscription =
            await this.prisma.subscription.findFirst({
                where: {
                    userId,
                    status: SubscriptionStatus.ACTIVE,
                },
                include: {
                    subscriptionPrice: {
                        include: {
                            subscriptionPlan: true,
                        },
                    },
                },
            });

        if (!currentSubscription) {
            throw new BadRequestException(
                'No active subscription found',
            );
        }

        if (!currentSubscription.stripeSubscriptionId) {
            throw new BadRequestException(
                'Stripe subscription not found',
            );
        }

        if (currentSubscription.cancelAtPeriodEnd) {
            throw new BadRequestException(
                'Subscription is already scheduled for cancellation',
            );
        }

        const stripeSubscription =
            await this.stripeService.client.subscriptions.update(
                currentSubscription.stripeSubscriptionId,
                {
                    cancel_at_period_end: true,
                },
            );

        const item =
            stripeSubscription.items.data[0];

        if (!item) {
            throw new BadRequestException(
                'Stripe subscription item not found',
            );
        }

        return {
            subscriptionId: stripeSubscription.id,
            cancelAtPeriodEnd:
                stripeSubscription.cancel_at_period_end,
            currentPeriodEnd:
                new Date(item.current_period_end * 1000),
        };
    }
}
