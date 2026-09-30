import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { CreditController } from './credit.controller.js';
import { CreditService } from './credit.service.js';

@Module({
    imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
    controllers: [CreditController],
    providers: [CreditService],
    exports: [CreditService],
})
export class CreditModule { }
