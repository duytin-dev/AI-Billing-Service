import { PrismaService } from './../prisma/prisma.service.js';
import { BadGatewayException, BadRequestException, ConflictException, Injectable } from "@nestjs/common";
import { CustomerService } from "../customer/customer.service.js";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { RegisterDto } from "./dto/req/register.req.dto.js";
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/req/login.req.dto.js';
import { LoginDtoResponse } from './dto/res/login.res.dto.js';
import { RegisterDtoResponse } from './dto/res/register.res.dto.js';
import { StringValue } from 'ms';
import { Stripe } from 'stripe';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
        private readonly prismaService: PrismaService,
        private readonly customerService: CustomerService,
    ) { }
    async register(registerDto: RegisterDto) {
        console.log('1. Start register');

        const existUser = await this.prismaService.user.findUnique({
            where: { email: registerDto.email }
        })

        if (existUser) {
            throw new ConflictException("Email already exist!")
        }
        const hashPassword = await bcrypt.hash(registerDto.password, 10)
        const customer = await this.customerService.handleCreateCustomer({
            email: registerDto.email,
            name: registerDto.name,
        });
        console.log('2. Stripe customer:', customer.id);
        const user = await this.prismaService.user.create({
            data: {
                email: registerDto.email,
                name: registerDto.name,
                password: hashPassword,
                stripeCustomerId: customer.id,
            },
        })
        const registerDtoResponse: RegisterDtoResponse = {
            id: user.id,
            email: user.email,
            name: user.name,
            stripeCustomerId: user.stripeCustomerId
        }
        console.log('3. User created:', user.id);
        return registerDtoResponse;
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
            throw new BadRequestException('Account does not exist!')
        }

        const checkPass = await bcrypt.compare(
            loginDto.password,
            user.password,
        )

        if (!checkPass) {
            throw new BadRequestException('Password is incorrect!')
        }
        const payload = {
            sub: user.id,
            email: user.email,
        }
        const accessToken = await this.jwtService.signAsync(payload);
        const refreshToken = await this.jwtService.signAsync(payload, {
            secret: this.configService.getOrThrow<string>('JWT_REFRESH_SECRET'),
            expiresIn: this.configService.getOrThrow<StringValue>('JWT_REFRESH_EXPIRES_IN'),
        })

        const loginDtoResponse: LoginDtoResponse = {
            id: user.id,
            name: user.name,
            email: user.email,
            accessToken: accessToken,
            refreshToken: refreshToken,
        }
        return loginDtoResponse;


    }
}