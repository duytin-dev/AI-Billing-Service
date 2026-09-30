import { CreateCustomerDto } from './dto/req/create-customer.dto.js';
import { CustomerService } from './customer.service.js';
import { Body, Controller, Post, Get, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { Stripe } from 'stripe';
import { UpdateCustomerDto } from './dto/req/update-customer.dto.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
@Controller('api/customers')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) {
    }
    @UseGuards(JwtAuthGuard)
    @Post()
    async createCustomer(@Body() customerDto: CreateCustomerDto) {
        return this.customerService.handleCreateCustomer(customerDto)
    }
    @UseGuards(JwtAuthGuard)
    @Get(':customerId')
    async getCustomerById(@Param('customerId') customerId: string) {
        return this.customerService.getCustomerById(customerId);
    }
    @UseGuards(JwtAuthGuard)
    @Put(':customerId')
    async updateCustomer(@Param('customerId') customerId: string, @Body() updateCustomerDto: UpdateCustomerDto,
    ) {
        return this.customerService.updateCustomer(customerId, updateCustomerDto);
    }
    @UseGuards(JwtAuthGuard)
    @Delete(':customerId')
    async deleteCustomer(@Param('customerId') customerId: string) {
        return this.customerService.deleteCustomer(customerId);
    }




}