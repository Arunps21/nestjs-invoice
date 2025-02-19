import { IsNumber, IsNotEmpty, IsEnum } from 'class-validator';

export class CreateInvoiceDto {
  @IsNumber()
  @IsNotEmpty()
  supplier: number;

  @IsNumber()
  @IsNotEmpty()
  buyer: number;

  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsEnum(['Pending', 'Approved', 'Rejected'])
  status: 'Pending' | 'Approved' | 'Rejected';

  @IsEnum(['Pending', 'Validated', 'Rejected'])
  taxAuthorityStatus: 'Pending' | 'Validated' | 'Rejected';
}
