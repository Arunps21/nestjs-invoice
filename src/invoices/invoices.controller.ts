import {
  Body,
  Controller,
  Post,
  Get,
  ParseIntPipe,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { CreateInvoiceDto } from './dto/create-invoices.dto';
import { UpdateInvoiceDto } from './dto/update-invoices.dto';

@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}
  @Post('create-invoice')
  createInvoice(@Body() invoice: CreateInvoiceDto) {
    return this.invoicesService.createInvoice(invoice);
  }
  @Get('all')
  getAllInvoices() {
    return this.invoicesService.getAllInvoices();
  }
  @Get(':id')
  getInvoiceById(@Param('id', ParseIntPipe) id: number) {
    return this.invoicesService.getInvoiceById(id);
  }
  @Put(':id')
  updateInvoiceStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() status: UpdateInvoiceDto,
  ) {
    return this.invoicesService.updateInvoiceStatus(id, status);
  }
  @Delete(':id')
  deleteInvoice(@Param('id', ParseIntPipe) id: number) {
    return this.invoicesService.deleteInvoice(id);
  }
}
