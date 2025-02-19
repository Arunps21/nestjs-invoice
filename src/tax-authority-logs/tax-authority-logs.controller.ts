import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { TaxAuthorityLogsService } from './tax-authority-logs.service';
import { CreateTaxAuthorityLogsDto } from './dto/create-tax-authority-logs.dto';
import { UpdateTaxAuthorityLogsDto } from './dto/update-tax-authority-logs.dto';

@Controller('tax-authority-logs')
export class TaxAuthorityLogsController {
  constructor(
    private readonly taxAuthorityLogsService: TaxAuthorityLogsService,
  ) {}
  @Post('create')
  createTaxAuthorityLog(@Body() taxAuthorityLog: CreateTaxAuthorityLogsDto) {
    return this.taxAuthorityLogsService.createTaxAuthorityLog(taxAuthorityLog);
  }
  @Get('all')
  getTaxAuthorityLog() {
    return this.taxAuthorityLogsService.getTaxAuthorityLog();
  }
  @Get(':id')
  getTaxAuthorityLogById(@Param('id', ParseIntPipe) id: number) {
    return this.taxAuthorityLogsService.getTaxAuthorityLogByInvoiceId(id);
  }

  @Put(':id')
  updateTaxAuthorityLog(
    @Param('id') id: number,
    @Body() updateTaxAuthorityLog: UpdateTaxAuthorityLogsDto,
  ) {
    return this.taxAuthorityLogsService.updateTaxAuthorityLog(
      id,
      updateTaxAuthorityLog,
    );
  }
  @Delete(':id')
  deleteTaxAuthorityLog(@Param('id', ParseIntPipe) id: number) {
    return this.taxAuthorityLogsService.deleteTaxAuthorityLog(id);
  }
}
