import { Injectable, Logger } from '@nestjs/common';
import type Stripe from 'stripe';
import {
  SubscriptionStatus,
} from '../../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { StripeService } from '../stripe/stripe.service.js';

@Injectable()
export class WebhookService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly stripeService: StripeService,
  ) { }

  async handleEvent(event: Stripe.Event) {
    console.log('EVENT RECEIVED:', event.type);

    switch (event.type) {
      case 'customer.subscription.created':
        await this.handleSubscriptionCreated(
          event.data.object,
        );
        break;
      case 'customer.subscription.updated':
        await this.handleSubscriptionUpdated(
          event.data.object,
        );
        break;
      case 'customer.subscription.deleted':
        await this.handleSubscriptionDeleted(
          event.data.object,
        );
        break;
      case 'invoice.paid':
        await this.handleInvoicePaid(
          event.data.object,
        );
        break;
      default:
        console.log(
          `Unhandled Stripe event: ${event.type}`,
        );
    }
  }
  private async handleSubscriptionCreated(subscription: Stripe.Subscription,) {
    console.log(
      'SUBSCRIPTION METADATA:',
      subscription.metadata,
    );


    const userId = subscription.metadata.userId;
    const subscriptionPriceId = subscription.metadata.subscriptionPriceId;

    if (!userId || !subscriptionPriceId) {
      throw new Error(
        `Missing subscription metadata: ${subscription.id}`,
      );
    }
    const item = subscription.items.data[0];
    if (!item) {
      throw new Error(
        `Subscription has no items: ${subscription.id}`,
      );
    }

    const currentPeriodStart = new Date(
      item.current_period_start * 1000,
    );

    const currentPeriodEnd = new Date(
      item.current_period_end * 1000,
    );

    const result = await this.prisma.subscription.create({
      data: {
        userId,
        subscriptionPriceId,
        stripeSubscriptionId: subscription.id,
        status: this.mapSubscriptionStatus(subscription.status,),
        startedAt: new Date(subscription.start_date * 1000,),
        currentPeriodStart,
        currentPeriodEnd,
        nextCreditRefillAt: currentPeriodEnd,
        retryCount: 0,
        firstFailedAt: null,
        cancelAtPeriodEnd: subscription.cancel_at_period_end,
        canceledAt: subscription.canceled_at ? new Date(subscription.canceled_at * 1000,) : null,
        endedAt: subscription.ended_at ? new Date(subscription.ended_at * 1000,) : null,
      }

    });
    console.log('DATABASE RESULT:', result);
    console.log(`Subscription created: ${subscription.id} for user ${userId}`,);
  }

  private mapSubscriptionStatus(
    status: Stripe.Subscription.Status,
  ): SubscriptionStatus {
    switch (status) {
      case 'active':
        return SubscriptionStatus.ACTIVE;

      case 'trialing':
        return SubscriptionStatus.TRIALING;

      case 'incomplete':
        return SubscriptionStatus.INCOMPLETE;

      case 'incomplete_expired':
        return SubscriptionStatus.EXPIRED;

      case 'past_due':
        return SubscriptionStatus.PAST_DUE;

      case 'unpaid':
        return SubscriptionStatus.UNPAID;

      case 'paused':
        return SubscriptionStatus.PAUSED;

      case 'canceled':
        return SubscriptionStatus.CANCELED;

      default:
        throw new Error(
          `Unsupported Stripe subscription status: ${status}`,
        );
    }
  }
  private async handleInvoicePaid(
    invoice: Stripe.Invoice,
  ) {
    // Chỉ xử lý invoice phát sinh do đổi subscription
    if (invoice.billing_reason !== 'subscription_update') {
      return;
    }

    const parent = invoice.parent;

    if (
      !parent ||
      parent.type !== 'subscription_details' ||
      !parent.subscription_details?.subscription
    ) {
      throw new Error(
        `Subscription not found on invoice: ${invoice.id}`,
      );
    }

    const subscriptionRef =
      parent.subscription_details.subscription;

    const stripeSubscriptionId =
      typeof subscriptionRef === 'string'
        ? subscriptionRef
        : subscriptionRef.id;

    // Lấy subscription mới nhất từ Stripe
    const stripeSubscription =
      await this.stripeService.client.subscriptions.retrieve(
        stripeSubscriptionId,
      );

    // Payment đã thành công nhưng vẫn nên verify subscription active
    if (stripeSubscription.status !== 'active') {
      throw new Error(
        `Subscription is not active after payment: ${stripeSubscription.id}`,
      );
    }

    const item = stripeSubscription.items.data[0];

    if (!item) {
      throw new Error(
        `Subscription has no items: ${stripeSubscription.id}`,
      );
    }

    // Đây là Stripe Price hiện tại.
    // Sau khi thanh toán thành công nó phải là PRO price.
    const stripePriceId = item.price.id;

    // Map Stripe Price -> SubscriptionPrice trong DB
    const newPrice =
      await this.prisma.subscriptionPrice.findUnique({
        where: {
          stripePriceId,
        },
      });

    if (!newPrice) {
      throw new Error(
        `SubscriptionPrice not found for Stripe price: ${stripePriceId}`,
      );
    }

    const currentPeriodStart =
      new Date(item.current_period_start * 1000);

    const currentPeriodEnd =
      new Date(item.current_period_end * 1000);

    const result =
      await this.prisma.subscription.update({
        where: {
          stripeSubscriptionId,
        },

        data: {
          // FREE -> PRO thật sự ở đây
          subscriptionPriceId: newPrice.id,

          status: this.mapSubscriptionStatus(
            stripeSubscription.status,
          ),

          currentPeriodStart,
          currentPeriodEnd,

          nextCreditRefillAt: currentPeriodEnd,

          retryCount: 0,
          firstFailedAt: null,

          cancelAtPeriodEnd:
            stripeSubscription.cancel_at_period_end,

          canceledAt:
            stripeSubscription.canceled_at
              ? new Date(
                stripeSubscription.canceled_at * 1000,
              )
              : null,

          endedAt:
            stripeSubscription.ended_at
              ? new Date(
                stripeSubscription.ended_at * 1000,
              )
              : null,
        },
      });

    console.log(
      'SUBSCRIPTION UPGRADED FREE -> PRO:',
      result,
    );
  }
  private async handleSubscriptionUpdated(
    subscription: Stripe.Subscription,
  ) {
    const item = subscription.items.data[0];

    if (!item) {
      throw new Error(
        `Subscription has no items: ${subscription.id}`,
      );
    }

    const currentPeriodStart =
      new Date(item.current_period_start * 1000);

    const currentPeriodEnd =
      new Date(item.current_period_end * 1000);

    await this.prisma.subscription.update({
      where: {
        stripeSubscriptionId: subscription.id,
      },

      data: {
        status:
          this.mapSubscriptionStatus(
            subscription.status,
          ),

        currentPeriodStart,
        currentPeriodEnd,

        cancelAtPeriodEnd:
          subscription.cancel_at_period_end,

        canceledAt:
          subscription.canceled_at
            ? new Date(
              subscription.canceled_at * 1000,
            )
            : null,

        endedAt:
          subscription.ended_at
            ? new Date(
              subscription.ended_at * 1000,
            )
            : null,
      },
    });

    console.log(
      `Subscription updated: ${subscription.id}`,
    );
  }
  private async handleSubscriptionDeleted(
    subscription: Stripe.Subscription,
  ) {
    await this.prisma.subscription.update({
      where: {
        stripeSubscriptionId: subscription.id,
      },

      data: {
        status: SubscriptionStatus.CANCELED,

        cancelAtPeriodEnd: false,

        canceledAt:
          subscription.canceled_at
            ? new Date(
              subscription.canceled_at * 1000,
            )
            : new Date(),

        endedAt:
          subscription.ended_at
            ? new Date(
              subscription.ended_at * 1000,
            )
            : new Date(),
      },
    });

    console.log(
      `Subscription canceled: ${subscription.id}`,
    );
  }
}