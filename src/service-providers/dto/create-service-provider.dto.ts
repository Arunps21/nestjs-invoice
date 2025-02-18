import { HttpStatus } from '@nestjs/common';
import { IsString, IsNotEmpty, IsEnum, IsUrl } from 'class-validator';

export class CreateServiceProviderDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(['Supplier', 'Buyer'], {
    message: 'Type must be either Supplier or Buyer',
  })
  type: 'Supplier' | 'Buyer';

  @IsUrl({}, { message: 'Invalid API URL' })
  @IsNotEmpty()
  api_url: string;
}
