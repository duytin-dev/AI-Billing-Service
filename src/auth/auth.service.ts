import { PrismaService } from './../prisma/prisma.service.js';
import { BadGatewayException, BadRequestException, ConflictException, Injectable } from "@nestjs/common";
import { CustomerService } from "../customer/customer.service.js";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { RegisterDto } from "./dto/req/register.req.dto.js";
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/req/login.req.dto.js';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
        private readonly prismaService: PrismaService,
    ) { }
    async register(registerDto: RegisterDto) {
        const existUser = await this.prismaService.user.findUnique({
            where: { email: registerDto.email }
        })

        if (existUser) {
            throw new ConflictException("Email already exist!")
        }
        const hashPassword = await bcrypt.hash(registerDto.password, 10)
        const user = await this.prismaService.user.create({
            data: {
                email: registerDto.email,
                name: registerDto.name,
                password: hashPassword,
            },
        })
        return {
            id: user.id,
            email: user.email,
            name: user.name,
        }
    }
    async login(loginDto: LoginDto) {
        const user = await this.prismaService.user.findUnique({
            where: { email: loginDto.email },
            select: {
                id: true,
                email: true,
                name: true,
                password: true,
            },
        })
        if (!user) {
            throw new BadRequestException('Account do not exist !')
        }
        const checkPass = bcrypt.compare(loginDto.password, user.password)

    }
}