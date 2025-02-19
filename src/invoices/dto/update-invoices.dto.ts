import { IsEnum, IsOptional } from 'class-validator';

export class UpdateInvoiceDto {
  @IsEnum(['Pending', 'Approved', 'Rejected'])
  @IsOptional()
  status?: 'Pending' | 'Approved' | 'Rejected';

  @IsEnum(['Pending', 'Validated', 'Rejected'])
  @IsOptional()
  taxAuthorityStatus?: 'Pending' | 'Validated' | 'Rejected';
}
