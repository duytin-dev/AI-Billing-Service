import { IsEmail, IsNotEmpty, IsString } from "class-validator";
export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    stripeCustomerId: string;
}