import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtTokenStrategy } from './jwt-token.strategy';

@Module({
  imports: [PassportModule],
  providers: [JwtTokenStrategy],
  exports: [PassportModule],
})
export class AuthModule {}
