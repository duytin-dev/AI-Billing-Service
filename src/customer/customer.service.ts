import { Stripe } from 'stripe';
import { CreateCustomerDto } from './dto/req/create-customer.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

export class CustomerService {
    private readonly stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
    constructor(private readonly prisma: PrismaService) { }

    async handleCreateCustomer(dto: CreateCustomerDto) {
        //check exist in Stripe

    }
}