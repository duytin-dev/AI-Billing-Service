import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCustomerDto {
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    name: string;
}