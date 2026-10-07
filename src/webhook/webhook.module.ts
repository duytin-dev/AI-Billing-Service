import { Module } from '@nestjs/common';
import { StripeModule } from '../stripe/stripe.module.js';
import { WebhookController } from './webhook.controller.js';
import { WebhookService } from './webhook.service.js';
import { CreditModule } from '../credit/credit.module.js';

@Module({
    imports: [StripeModule, CreditModule],
    controllers: [WebhookController],
    providers: [WebhookService],
})
export class WebhookModule { }
