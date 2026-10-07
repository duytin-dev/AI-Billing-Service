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

    // async createCheckout(userId: string, subscriptionPriceId: string,) {

    //     const user = await this.prisma.user.findUnique({
    //         where: { id: userId },
    //         select: { stripeCustomerId: true },
    //     });

    //     if (!user) {
    //         throw new NotFoundException('User not found');
    //     }

    //     if (!user.stripeCustomerId) {
    //         throw new BadRequestException('User has no Stripe customer');
    //     }

    //     const price = await this.prisma.subscriptionPrice.findUnique({
    //         where: { id: subscriptionPriceId },
    //         include: { subscriptionPlan: true },
    //     });

    //     if (
    //         !price ||
    //         !price.isActive ||
    //         !price.subscriptionPlan.isActive ||
    //         !price.stripePriceId
    //     ) {
    //         throw new BadRequestException('Subscription price unavailable');
    //     }
    //     const existingSubscription =
    //         await this.prisma.subscription.findFirst({
    //             where: {
    //                 userId,
    //                 status: {
    //                     in: [
    //                         SubscriptionStatus.ACTIVE
    //                     ],
    //                 },
    //             },
    //         });

    //     if (existingSubscription) {
    //         throw new BadRequestException(
    //             'You already have an active subscription',
    //         );
    //     }
    //     const session = await this.stripeService.client.checkout.sessions.create({
    //         mode: 'subscription',
    //         customer: user.stripeCustomerId,
    //         line_items: [
    //             {
    //                 price: price.stripePriceId,
    //                 quantity: 1,
    //             },
    //         ],
    //         client_reference_id: userId,
    //         subscription_data: {
    //             metadata: {
    //                 userId,
    //                 subscriptionPriceId: price.id,
    //             },
    //         },
    //         success_url:
    //             this.configService.getOrThrow<string>(
    //                 'STRIPE_CHECKOUT_SUCCESS_URL',
    //             ),
    //         cancel_url:
    //             this.configService.getOrThrow<string>(
    //                 'STRIPE_CHECKOUT_CANCEL_URL',
    //             ),
    //     });

    //     return {
    //         sessionId: session.id,
    //         url: session.url,
    //     };
    // }
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
}
