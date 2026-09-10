import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client/scripts/default-index.js";
import { OnModuleInit, OnModuleDestroy } from "@nestjs/common";
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {

    async onModuleInit() {
        await this.$connect();
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }

}