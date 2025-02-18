import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entity/users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-users.dto';
import { plainToInstance } from 'class-transformer';
import { ServiceProvider } from 'src/service-providers/entity/service-provider.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
    @InjectRepository(ServiceProvider)
    private serviceProviderRepository: Repository<ServiceProvider>,
  ) {}

  public async createUser(users: CreateUserDto) {
    try {
      const serviceProvider = await this.serviceProviderRepository.findOne({
        where: { id: users.service_provider_id },
      });
      if (!serviceProvider) {
        return `Service Provider not found`;
      }

      let user = await this.usersRepository.findOne({
        where: {
          email: users.email,
        },
      });
      if (user) {
        return `User this email already exists`;
      }

      // let newUser = this.usersRepository.create(users);
      let newUser = plainToInstance(Users, users);
      await this.usersRepository.save(newUser);
      return `User created successfully`;
    } catch (err) {
      console.log(err);
    }
  }
}
