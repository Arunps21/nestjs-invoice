import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaxAuthorityLogsDto } from './dto/create-tax-authority-logs.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaxAuthorityLogs } from './entity/tax-authority-logs.entity';
import { Repository } from 'typeorm';
import { Invoices } from 'src/invoices/entity/invoices.entity';
import { UpdateTaxAuthorityLogsDto } from './dto/update-tax-authority-logs.dto';

@Injectable()
export class TaxAuthorityLogsService {
  constructor(
    @InjectRepository(TaxAuthorityLogs)
    private readonly taxAuthorityLogRepository: Repository<TaxAuthorityLogs>,
    @InjectRepository(Invoices)
    private readonly invoiceRepository: Repository<Invoices>,
  ) {}
  public async createTaxAuthorityLog(
    taxAuthorityLog: CreateTaxAuthorityLogsDto,
  ) {
    try {
      const invoice = await this.invoiceRepository.findOne({
        where: { id: taxAuthorityLog.invoice_id },
      });
      if (!invoice) {
        return 'Invoice not found';
      }
      const log = this.taxAuthorityLogRepository.create(taxAuthorityLog);
      await this.taxAuthorityLogRepository.save(log);
      return `Tax authority log created successfully`;
    } catch (err) {
      throw new NotFoundException('Invoice not found');
    }
  }
  public async getTaxAuthorityLog() {
    try {
      return await this.taxAuthorityLogRepository.find();
    } catch (err) {
      console.log(err);
    }
  }
  public async getTaxAuthorityLogByInvoiceId(invoice_id: number) {
    try {
      return await this.taxAuthorityLogRepository.findOne({
        where: { id: invoice_id },
      });
    } catch (err) {
      console.log(err);
    }
  }
  public async updateTaxAuthorityLog(
    id: number,
    updateTaxAuthorityLog: UpdateTaxAuthorityLogsDto,
  ) {
    try {
      const log = await this.taxAuthorityLogRepository.findOne({
        where: { id },
      });
      if (!log) {
        return 'Tax authority log not found';
      }
      await this.taxAuthorityLogRepository.update(id, updateTaxAuthorityLog);
      return this.taxAuthorityLogRepository.findOne({ where: { id } });
    } catch (err) {
      console.log(err);
    }
  }
  public async deleteTaxAuthorityLog(id: number) {
    try {
      await this.taxAuthorityLogRepository.delete(id);
      return `Tax authority log deleted succesfully`;
    } catch (err) {
      console.log(err);
    }
  }
}
