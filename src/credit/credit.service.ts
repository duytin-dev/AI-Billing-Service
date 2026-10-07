import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CreditTransactionType, Prisma, SubscriptionStatus } from '../../generated/prisma/client.js';
import type { CreditAccount } from '../../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreditBalanceDto } from './dto/req/credit-balance.dto.js';
import { CreditTransactionResponseDto } from './dto/res/credit-transaction.res.dto.js';
import { ConsumeCreditDto } from './dto/req/consume-credit.dto.js';




@Injectable()
export class CreditService {


}
