import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateCustomerDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name: string;
}