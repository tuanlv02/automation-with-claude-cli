import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class QueryUserDto {
  @ApiPropertyOptional({
    description: 'Search keyword for user name of email',
  })
  @IsOptional()
  search: string;
}
