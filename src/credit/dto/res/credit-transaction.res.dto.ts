import { CreditTransactionType } from '../../../../generated/prisma/client.js';

export class CreditTransactionResponseDto {
    id!: string;
    amount!: number;
    type!: CreditTransactionType;
    description!: string | null;
    balanceBefore!: number;
    balanceAfter!: number;
    referenceId!: string | null;
    createdAt!: Date;
}
