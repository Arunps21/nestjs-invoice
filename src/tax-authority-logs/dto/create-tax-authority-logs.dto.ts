import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateTaxAuthorityLogsDto {
  @IsInt()
  invoice_id: number;

  @IsEnum(['Pending', 'Validated', 'Rejected'])
  status: string;

  @IsOptional()
  @IsString()
  comments?: string;
}
