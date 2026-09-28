import { CreateCustomerDto } from './dto/req/create-customer.dto.js';
import { CustomerService } from './customer.service.js';
import { Body, Controller, Post } from '@nestjs/common';
@Controller('api/customers')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) {
    }
    @Post()
    async createCustomer(@Body() customerDto: CreateCustomerDto) {
        return this.customerService.handleCreateCustomer(customerDto)
    }




}