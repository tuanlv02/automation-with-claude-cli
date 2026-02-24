import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Full name',
    example: 'Tuan LV',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Email',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Password',
  })
  @IsNotEmpty()
  @MinLength(4)
  password: string;
}
