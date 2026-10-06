import { Module } from '@nestjs/common';
import { UserService } from './user.service.js';
import { PrismaModule } from '../prisma/prisma.module.js';
import { UserRepository } from './user.repository.js';

@Module({
    imports: [PrismaModule],
    providers: [UserService, UserRepository],
    exports: [UserService],
})
export class UserModule { }