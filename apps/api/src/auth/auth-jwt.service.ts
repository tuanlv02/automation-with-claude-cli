import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthJwtService {
  constructor(private readonly jwtService: JwtService) {}

  generateToken(payload: { sub: string; email: string }): string {
    return this.jwtService.sign(payload);
  }
}
