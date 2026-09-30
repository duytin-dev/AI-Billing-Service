import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { LoginDto } from './dto/req/login.req.dto.js';
import { RegisterDto } from './dto/req/register.req.dto.js';
import { LoginDtoResponse } from './dto/res/login.res.dto.js';
import { RegisterDtoResponse } from './dto/res/register.res.dto.js';

@Controller('api/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('register')
    @HttpCode(HttpStatus.CREATED)
    async register(@Body() registerDto: RegisterDto): Promise<RegisterDtoResponse> {
        return this.authService.register(registerDto);
    }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() loginDto: LoginDto): Promise<LoginDtoResponse> {
        return this.authService.login(loginDto);
    }

}