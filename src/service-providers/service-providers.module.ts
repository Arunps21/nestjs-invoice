import { Module } from '@nestjs/common';
import { ServiceProvidersController } from './service-providers.controller';
import { ServiceProvidersService } from './service-providers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceProvider } from './entity/service-provider.entity';

@Module({
  controllers: [ServiceProvidersController],
  providers: [ServiceProvidersService],
  imports: [TypeOrmModule.forFeature([ServiceProvider])],
})
export class ServiceProvidersModule {}
