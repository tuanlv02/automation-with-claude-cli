import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { ENVIRONMENT } from '../common/enum/environment';
import { JwtPayloadDto } from '@app/auth-utilities';
@Injectable()
export class JwtTokenStrategy extends PassportStrategy(Strategy, 'jwt-token') {
  constructor(private readonly configService: ConfigService) {
    const secret = configService.get<string>(ENVIRONMENT.JWT_SECRET);
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secret,
    });
  }

  async validate(payload: JwtPayloadDto) {
    if (
      !payload ||
      !payload.user_id ||
      !payload.roles ||
      !payload.organization_id
    ) {
      throw new UnauthorizedException('Invalid token payload');
    }
    return payload;
  }
}
