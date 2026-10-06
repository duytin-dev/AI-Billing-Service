import { ConflictException, Injectable, Logger, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreditSource } from '../../generated/prisma/client.js';
import { CustomerService } from '../customer/customer.service.js';
import { UserService } from '../user/user.service.js';
import { CreditService } from '../credit/credit.service.js';
import { LoginDto } from './dto/req/login.req.dto.js';
import { RegisterDto } from './dto/req/register.req.dto.js';
import { LoginDtoResponse } from './dto/res/login.res.dto.js';
import { RegisterDtoResponse } from './dto/res/register.res.dto.js';
import { JwtPayload } from './interfaces/jwt-payload.interface.js';

const SALT_ROUNDS = 10;
const INITIAL_FREE_CREDITS = 50;

@Injectable()
export class AuthService {
    private readonly logger = new Logger(AuthService.name);

    constructor(
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
        private readonly customerService: CustomerService,
        private readonly userService: UserService,
        private readonly creditService: CreditService,
    ) { }

    async register(registerDto: RegisterDto): Promise<RegisterDtoResponse> {
        const normalizedEmail = registerDto.email.trim().toLowerCase();

        const existingUser = await this.userService.findByEmail(normalizedEmail);

        if (existingUser) {
            throw new ConflictException('Email already exists');
        }

        const hashedPassword = await bcrypt.hash(registerDto.password, SALT_ROUNDS);

        const customer = await this.customerService.handleCreateCustomer({ email: normalizedEmail, name: registerDto.name.trim(), });

        const user = await this.userService.create({
            email: normalizedEmail,
            name: registerDto.name.trim(),
            password: hashedPassword,
            stripeCustomerId: customer.id,
        });
        if (!user) {
            throw new NotFoundException('User creation failed');
        }
        try {
            await this.creditService.allocateCredits({
                userId: user.id,
                amount: INITIAL_FREE_CREDITS,
                source: CreditSource.SUBSCRIPTION,
                description: 'Initial 50 free credits upon registration',
            });
        } catch (creditError) {
            this.logger.error(`Failed to allocate initial credits for user ${user.id}`, creditError);
        }

        return {
            id: user.id,
            email: user.email,
            name: user.name,
            stripeCustomerId: user.stripeCustomerId,
        };
    }

    async login(loginDto: LoginDto): Promise<LoginDtoResponse> {
        const normalizedEmail = loginDto.email.trim().toLowerCase();

        const user = await this.userService.findByEmail(normalizedEmail);
        if (!user) {
            throw new UnauthorizedException('Invalid email or password');
        }

        const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid email or password');
        }

        const accessToken = await this.generateAccessToken(user.id, user.email);

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            accessToken,
        };
    }

    private async generateAccessToken(userId: string, email: string,): Promise<string> {
        const payload: JwtPayload = { sub: userId, email };
        return this.jwtService.signAsync(payload);
    }
}   