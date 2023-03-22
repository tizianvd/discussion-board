import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserSessionSerializer } from './session.serializer';
import { LocalStrategy } from "./local.strategy"
import { AuthService } from './auth.service';
@Module({
  controllers: [],
  providers: [UserSessionSerializer, AuthService, LocalStrategy],
  exports: [],
  imports: [PassportModule.register({session: true})]
})
export class AuthModule {}
