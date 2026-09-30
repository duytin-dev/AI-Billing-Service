
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { User } from "../../generated/prisma/client.js";
import { CreateUserDto } from "./dto/req/create-user.req.dto.js";

@Injectable()
export class UserService {

    constructor(private readonly prismaService: PrismaService) { }
    async findByEmail(email: string): Promise<User | null> {
        return this.prismaService.user.findUnique({
            where: {
                email,
            },
        });
    }

    async handleCreateUser(createUserDto: CreateUserDto) {
        return this.prismaService.user.create({
            data: createUserDto,
        });
    }

    async findById(id: string): Promise<User | null> {
        return this.prismaService.user.findUnique({
            where: {
                id,
            },
        });
    }
}