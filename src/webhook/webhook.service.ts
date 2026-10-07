import { Injectable, Logger } from '@nestjs/common';
import type Stripe from 'stripe';
import {
  SubscriptionStatus,
} from '../../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class WebhookService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }

  async handleEvent(event: Stripe.Event) {
    switch (event.type) {
      case 'customer.subscription.created':
        await this.handleSubscriptionCreated(event.data.object);
        break;
      default:
        console.log(
          `Unhandled Stripe event: ${event.type}`,
        );
    }
  }
  private async handleSubscriptionCreated(subscription: Stripe.Subscription,) {

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

    await this.prisma.subscription.create({
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
}