import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Param,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { ServiceProvidersService } from './service-providers.service';
import { CreateServiceProviderDto } from './dto/create-service-provider.dto';
import { UpdateServiceProviderDto } from './dto/update-service-provider.dto';

@Controller('service-providers')
export class ServiceProvidersController {
  constructor(
    private readonly serviceProviderSevice: ServiceProvidersService,
  ) {}
  @Post('create')
  createServiceProviders(@Body() serviceProvider: CreateServiceProviderDto) {
    return this.serviceProviderSevice.createServiceProviders(serviceProvider);
  }
  @Get('all')
  getServiceProviders() {
    return this.serviceProviderSevice.getServiceProviders();
  }
  @Put(':id')
  updateServiceProvider(
    @Param('id', ParseIntPipe) userid: number,
    @Body() updateServiceProvider: UpdateServiceProviderDto,
  ) {
    return this.serviceProviderSevice.updateServiceProvider(
      userid,
      updateServiceProvider,
    );
  }
  @Delete(':id')
  deleteServiceProvider(@Param('id', ParseIntPipe) id: number) {
    return this.serviceProviderSevice.deleteServiceProvider(id);
  }
}
