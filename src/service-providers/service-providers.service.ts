import { Injectable } from '@nestjs/common';
import { CreateServiceProviderDto } from './dto/create-service-provider.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceProvider } from './entity/service-provider.entity';
import { Repository } from 'typeorm';
import { UpdateServiceProviderDto } from './dto/update-service-provider.dto';

@Injectable()
export class ServiceProvidersService {
  constructor(
    @InjectRepository(ServiceProvider)
    private serviceProviderRepository: Repository<ServiceProvider>,
  ) {}
  public async createServiceProviders(providers: CreateServiceProviderDto) {
    try {
      const serviceProviders = this.serviceProviderRepository.create(providers);
      await this.serviceProviderRepository.save(serviceProviders);
      return await this.serviceProviderRepository.find();
    } catch (err) {
      console.log(err);
    }
  }
  public async getServiceProviders() {
    try {
      return await this.serviceProviderRepository.find();
    } catch (err) {
      console.log(err);
    }
  }

  public async updateServiceProvider(
    id: number,
    updateServiceProvider: UpdateServiceProviderDto,
  ) {
    try {
      await this.serviceProviderRepository.update(id, updateServiceProvider);
      return await this.serviceProviderRepository.findOne({
        where: {
          id,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  public async deleteServiceProvider(id: number) {
    try {
      await this.serviceProviderRepository.delete(id);
      return this.serviceProviderRepository.find();
    } catch (err) {
      console.log(err);
    }
  }
}
