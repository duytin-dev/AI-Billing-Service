import { Body, Controller, Get, HttpCode, HttpStatus, ParseIntPipe, Post, Query, UseGuards } from '@nestjs/common';
import { CurrentUser } from '../auth/decorators/current-user.decorator.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { CreditService } from './credit.service.js';
import { ConsumeCreditDto } from './dto/req/consume-credit.dto.js';
import { CreditBalanceDto } from './dto/req/credit-balance.dto.js';
import { CreditTransactionResponseDto } from './dto/res/credit-transaction.res.dto.js';
import { TransactionQueryDto } from './dto/res/transaction.res.dto.js';

@Controller('api/credits')
@UseGuards(JwtAuthGuard)
export class CreditController {
    constructor(private readonly creditService: CreditService) { }

    @Get('balance')
    @HttpCode(HttpStatus.OK)
    async getBalance(@CurrentUser('userId') userId: string): Promise<CreditBalanceDto> {
        return this.creditService.getBalance(userId);
    }

    @Post('consume')
    @HttpCode(HttpStatus.OK)
    async consume(@CurrentUser('userId') userId: string, @Body() dto: ConsumeCreditDto) {
        return this.creditService.consumeCredits({
            userId,
            amount: dto.amount,
            description: dto.description,
            referenceId: dto.referenceId,
        });
    }

    @Get('transactions')
    @HttpCode(HttpStatus.OK)
    async getTransactions(@CurrentUser('userId') userId: string, @Query() query: TransactionQueryDto): Promise<CreditTransactionResponseDto[]> {
        return this.creditService.getTransactionHistory(userId, query.limit);
    }
}
