import { IsInt, IsOptional, IsPositive, IsString } from 'class-validator';

export class ConsumeCreditDto {
    @IsInt({ message: 'Amount must be an integer' })
    @IsPositive({ message: 'Amount must be greater than 0' })
    amount!: number;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    referenceId?: string;
}
