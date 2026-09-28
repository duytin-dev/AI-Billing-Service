import { Stripe } from 'stripe';
import { CreateCustomerDto } from './dto/req/create-customer.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { StripeService } from '../stripe/stripe.service.js';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateCustomerDto } from './dto/req/update-customer.dto.js';
@Injectable()
export class CustomerService {
    constructor(private readonly stripeService: StripeService) { }

    async handleCreateCustomer(createCustomerDto: CreateCustomerDto): Promise<Stripe.Customer> {
        return this.stripeService.client.customers.create(createCustomerDto)
    }
    async getCustomerById(customerId: string): Promise<Stripe.Customer> {
        const customer = await this.stripeService.client.customers.retrieve(customerId);
        if (customer.deleted) {
            throw new NotFoundException('Customer not found');
        }
        return customer;
    }
    async updateCustomer(customerId: string, data: UpdateCustomerDto): Promise<Stripe.Customer> {
        return this.stripeService.client.customers.update(customerId, data);
    }
    async deleteCustomer(customerId: string): Promise<Stripe.DeletedCustomer> {
        return this.stripeService.client.customers.del(customerId);
    }
}