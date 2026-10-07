import {
    Body,
    Controller,
    Post,
    UseGuards,
} from '@nestjs/common';
import { CurrentUser } from '../auth/decorators/current-user.decorator.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { CreateCheckoutDto } from './dto/req/create-checkout.dto.js';
import { SubscriptionService } from './subscription.service.js';

@Controller('api/subscriptions')
@UseGuards(JwtAuthGuard)
export class SubscriptionController {
    constructor(
        private readonly subscriptionService: SubscriptionService,
    ) { }

    @Post('checkout')
    async createCheckout(@CurrentUser('userId') userId: string, @Body() dto: CreateCheckoutDto,) {
        return this.subscriptionService.createCheckout(userId, dto.subscriptionPriceId);
    }
    @Post('free')
    async subscribeFree(@CurrentUser('userId') userId: string,) {
        return this.subscriptionService.subscribeFree(userId);
    }
}