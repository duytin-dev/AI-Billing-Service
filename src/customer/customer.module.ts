import { PassportModule } from '@nestjs/passport';
import { Module } from "@nestjs/common";
import { CustomerController } from "./customer.controller.js";
import { CustomerService } from "./customer.service.js";
import { StripeModule } from "../stripe/stripe.module.js";

@Module({
    imports: [StripeModule, PassportModule.register({ defaultStrategy: 'jwt' })],
    controllers: [CustomerController],
    providers: [CustomerService],
    exports: [
        CustomerService,
    ],
})
export class CustomerModule { }