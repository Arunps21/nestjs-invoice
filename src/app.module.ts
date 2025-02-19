import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceProvidersModule } from './service-providers/service-providers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { InvoicesModule } from './invoices/invoices.module';
import { TaxAuthorityLogsModule } from './tax-authority-logs/tax-authority-logs.module';

@Module({
  imports: [
    ServiceProvidersModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'Reon@123',
        database: 'invoice',
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [],
      imports: [],
    }),
    UsersModule,
    InvoicesModule,
    TaxAuthorityLogsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
