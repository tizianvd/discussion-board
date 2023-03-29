import {PassportStrategy} from '@nestjs/passport';
import {ExtractJwt, Strategy} from 'passport-jwt';

import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import { UserAuthenticationService } from './user-authentication.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: UserAuthenticationService) {
        super({
            jwtFromRequest:   
            ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            secretOrKey: process.env.SECRETKEY,
        });
    }

    async validate(payload: JwtPayload): Promise<any> {
        const user = await this.authService.validateUser(payload);
        if (!user) {
            throw new HttpException('Invalid token', 
                HttpStatus.UNAUTHORIZED);
        }
        return user;
    }
}

export interface JwtPayload {  login: string;}