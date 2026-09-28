import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
export class UpdateCustomerDto {
    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsString()
    name?: string;

}