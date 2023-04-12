import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(login: string, password: string): Promise<any> {
    Logger.log("works")
    const user = await this.authService.login(login, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}