export class UpgradeSubscriptionResponseDto {
    invoiceId!: string;

    paymentUrl!: string;

    amountDue!: number;

    currency!: string;

    status!: string | null;
}