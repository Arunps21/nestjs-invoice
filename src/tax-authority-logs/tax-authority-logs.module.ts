import { Module } from '@nestjs/common';
import { TaxAuthorityLogsController } from './tax-authority-logs.controller';
import { TaxAuthorityLogsService } from './tax-authority-logs.service';
import { TaxAuthorityLogs } from './entity/tax-authority-logs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invoices } from 'src/invoices/entity/invoices.entity';

@Module({
  controllers: [TaxAuthorityLogsController],
  providers: [TaxAuthorityLogsService],
  imports: [TypeOrmModule.forFeature([TaxAuthorityLogs,Invoices])]
})
export class TaxAuthorityLogsModule {}
