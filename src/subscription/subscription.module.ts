import { Module } from '@nestjs/common';
import { StripeModule } from '../stripe/stripe.module.js';
import { AuthModule } from '../auth/auth.module.js';
import { SubscriptionController } from './subscription.controller.js';
import { SubscriptionService } from './subscription.service.js';

@Module({
    imports: [StripeModule, AuthModule],
    providers: [SubscriptionService],
    controllers: [SubscriptionController],
})
export class SubscriptionModule { }