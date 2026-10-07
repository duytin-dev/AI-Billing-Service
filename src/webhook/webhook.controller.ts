import {
  Controller,
  Headers,
  Post,
  Req,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { StripeService } from '../stripe/stripe.service.js';
import { WebhookService } from './webhook.service.js';
import type { RawBodyRequest } from '@nestjs/common';
@Controller('api/webhooks')
export class WebhookController {
  constructor(
    private readonly stripeService: StripeService,
    private readonly configService: ConfigService,
    private readonly webhookService: WebhookService,
  ) { }

  @Post('stripe')
  async handleStripeWebhook(
    @Req() req: RawBodyRequest<Request>,
    @Headers('stripe-signature') signature: string,
  ) {
    const event =
      this.stripeService.client.webhooks.constructEvent(
        req.rawBody!,
        signature,
        this.configService.getOrThrow<string>(
          'STRIPE_WEBHOOK_SECRET',
        ),
      );

    await this.webhookService.handleEvent(event);

    return {
      received: true,
    };
  }
}