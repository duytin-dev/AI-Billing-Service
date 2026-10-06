
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { Prisma, User } from '../../generated/prisma/client.js';
import { CreateUserDto } from './dto/req/create-user.req.dto.js';

@Injectable()
export class UserRepository {
    constructor(
        private readonly prismaService: PrismaService,
    ) { }

    async findById(id: string): Promise<User | null> {
        return this.prismaService.user.findUnique({
            where: {
                id,
            },
        });
    }
    async findByEmail(email: string): Promise<User | null> {
        return this.prismaService.user.findUnique({
            where: {
                email,
            },
        });
    }
    async create(data: Prisma.UserCreateInput): Promise<User> {
        return this.prismaService.user.create({
            data: data,
        });
    }
}