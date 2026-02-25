import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtTokenStrategy } from './jwt-token.strategy';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthJwtService } from './auth-jwt.service';
import { UsersModule } from '../users/users.module';
import { PrismaModule } from '../prisma.module';
import { ENVIRONMENT } from '../common/enum/environment';

@Module({
  imports: [
    PassportModule,
    UsersModule,
    PrismaModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>(ENVIRONMENT.JWT_SECRET),
        signOptions: {
          expiresIn: configService.get<number>(ENVIRONMENT.JWT_EXPIRES_IN),
        },
      }),
    }),
  ],
  providers: [JwtTokenStrategy, AuthService, AuthJwtService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
