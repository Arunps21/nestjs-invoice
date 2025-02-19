import { IsEnum, IsOptional, IsString } from 'class-validator';

export class UpdateTaxAuthorityLogsDto {
  @IsOptional()
  @IsEnum(['Pending', 'Validated', 'Rejected'])
  status?: string;

  @IsOptional()
  @IsString()
  comments?: string;
}
