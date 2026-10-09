export class ChangePlanResponseDto {
    subscriptionId!: string;

    invoiceId!: string | null;

    paymentUrl!: string | null;

    amountDue!: number | null;

    currency!: string | null;

    pending!: boolean;
}