import { AuthController } from './auth.controller.js';
import { JwtStrategy } from './jwt.strategy.js';
import { AuthService } from './auth.service.js';

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { StringValue } from 'ms';
import { CustomerModule } from '../customer/customer.module.js';

@Module({
    imports: [
        PassportModule,
        CustomerModule,

        JwtModule.registerAsync({
            inject: [ConfigService],

            useFactory: (configService: ConfigService) => ({
                secret: configService.getOrThrow<string>(
                    'JWT_SECRET',
                ),
                signOptions: {
                    expiresIn: configService.getOrThrow<StringValue>(
                        'JWT_EXPIRES_IN',
                    ),
                },
            }),
        }),
    ],

    controllers: [AuthController],

    providers: [
        AuthService,
        JwtStrategy,
    ],

    exports: [
        AuthService,
    ],
})
export class AuthModule { }