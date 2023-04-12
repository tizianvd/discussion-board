import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
//import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    //PrismaModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.SECRETKEY,
      signOptions: { expiresIn: '5m' }, 
    }),
    UsersModule,
  ],
  controllers: [AuthController, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
