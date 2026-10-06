
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { Prisma, User } from "../../generated/prisma/client.js";
import { CreateUserDto } from "./dto/req/create-user.req.dto.js";
import { UserRepository } from "./user.repository.js";

@Injectable()
export class UserService {

    constructor(private readonly userRepository: UserRepository) { }

    async create(data: Prisma.UserCreateInput): Promise<User> {
        return this.userRepository.create(data);
    }
    async findById(id: string): Promise<User | null> {
        return this.userRepository.findById(id);
    }
    async findByEmail(email: string): Promise<User | null> {
        return this.userRepository.findByEmail(email);
    }


}