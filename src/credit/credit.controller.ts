import { Body, Controller, Get, HttpCode, HttpStatus, Post, Query, UseGuards } from '@nestjs/common';
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


}
