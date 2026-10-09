import { IsUUID } from 'class-validator';

export class SubscriptionDto {
    @IsUUID()
    subscriptionPriceId!: string;
}