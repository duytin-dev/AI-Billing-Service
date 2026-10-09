import {
    Body,
    Controller,
    Post,
    UseGuards,
    Patch
} from '@nestjs/common';
import { CurrentUser } from '../auth/decorators/current-user.decorator.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { SubscriptionDto, } from './dto/req/create-checkout.dto.js';
import { SubscriptionService } from './subscription.service.js';
import { UpgradeSubscriptionResponseDto } from './dto/res/upgrade-subscription.res.dto.js';
import { ChangePlanResponseDto } from './dto/res/change-plan.res.dto.js';

@Controller('api/subscriptions')
@UseGuards(JwtAuthGuard)
export class SubscriptionController {
    constructor(
        private readonly subscriptionService: SubscriptionService,
    ) { }

    @Post('checkout')
    async createCheckout(@CurrentUser('userId') userId: string, @Body() dto: SubscriptionDto,) {
        return this.subscriptionService.createCheckout(userId, dto.subscriptionPriceId);
    }
    @Post('upgrade')
    async upgradeSubscription(@CurrentUser('userId') userId: string, @Body() dto: SubscriptionDto,): Promise<UpgradeSubscriptionResponseDto> {
        return this.subscriptionService.upgradeSubscription(userId, dto.subscriptionPriceId,);
    }
    @Patch('change-plan')
    async changePlan(@CurrentUser('userId') userId: string, @Body() dto: SubscriptionDto,): Promise<ChangePlanResponseDto> {
        return this.subscriptionService.changePlan(userId, dto.subscriptionPriceId,);
    }
    @Patch('cancel')
    async cancelSubscription(@CurrentUser('userId') userId: string) {
        return this.subscriptionService.cancelSubscription(userId);
    }
}