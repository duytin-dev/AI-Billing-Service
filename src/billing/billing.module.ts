import { Module } from '@nestjs/common';
import { StripeWebhookController } from './billing.controller.js';

@Module({
    controllers: [StripeWebhookController],
})
export class BillingModule { }