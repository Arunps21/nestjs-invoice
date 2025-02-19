import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Invoices } from './entity/invoices.entity';
import { Users } from 'src/users/entity/users.entity';
import { Repository } from 'typeorm';
import { CreateInvoiceDto } from './dto/create-invoices.dto';
import { UpdateInvoiceDto } from './dto/update-invoices.dto';

@Injectable()
export class InvoicesService {
  constructor(
    @InjectRepository(Invoices)
    private readonly invoicesRepository: Repository<Invoices>,
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}
  public async createInvoice(invoiceDto: CreateInvoiceDto) {
    const supplier = await this.usersRepository.findOne({
      where: { service_provider_id: invoiceDto.supplier },
    });
    if (!supplier) {
      throw new NotFoundException(
        `Supplier with ID ${invoiceDto.supplier} not found.`,
      );
    }
    const buyer = await this.usersRepository.findOne({
      where: { service_provider_id: invoiceDto.buyer },
    });
    if (!buyer) {
      throw new NotFoundException(
        `Buyer with ID ${invoiceDto.buyer}} not found.`,
      );
    }
    try {
      const invoice = this.invoicesRepository.create(invoiceDto);
      await this.invoicesRepository.save(invoice);
      return this.invoicesRepository.find();
    } catch (error) {
      return error;
    }
  }
  public async getAllInvoices() {
    return await this.invoicesRepository.find();
  }
  public async getInvoiceById(id: number) {
    try {
      const invoice = await this.invoicesRepository.findOne({
        where: { id },
      });
      if (!invoice) {
        throw new NotFoundException(`Invoice with ID ${id} not found.`);
      }
      return invoice;
    } catch (err) {
      console.log(err);
    }
  }
  public async updateInvoiceStatus(id: number, status: UpdateInvoiceDto) {
    try {
      const invoice = await this.invoicesRepository.findOne({
        where: { id },
      });
      if (!invoice) {
        throw new NotFoundException(`Invoice with ID ${id} not found.`);
      }
      await this.invoicesRepository.update(id, status);
      return await this.invoicesRepository.findOne({ where: { id } });
    } catch (err) {
      console.log(err);
    }
  }
  public async deleteInvoice(id: number) {
    try {
      await this.invoicesRepository.delete(id);
      return this.invoicesRepository.find();
    } catch (err) {
      console.log(err);
    }
  }
}
