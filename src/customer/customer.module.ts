import { Module } from "@nestjs/common";
import { CustomerController } from "./customer.controller.js";
import { CustomerService } from "./customer.service.js";
import { StripeModule } from "../stripe/stripe.module.js";

@Module({
    imports: [StripeModule],
    controllers: [CustomerController],
    providers: [CustomerService],
    exports: [
        CustomerService,
    ],
})
export class CustomerModule { }