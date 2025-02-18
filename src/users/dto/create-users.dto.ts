import { IsString, IsNotEmpty, IsEmail, IsInt } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail({}, { message: 'Invalid email format' })
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  role: string;

  @IsInt({ message: 'Service Provider ID must be an integer' })
  service_provider_id: number;
}
