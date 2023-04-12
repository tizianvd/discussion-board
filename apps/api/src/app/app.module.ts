import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ThreadsController, ThreadsService } from '@discussion-board/threads';
import { AuthController, AuthService, LocalStrategy, UsersController, UsersService} from '@discussion-board/users'
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [],
  controllers: [AppController, ThreadsController, AuthController, UsersController],
  providers: [AppService, ThreadsService, AuthService, JwtService, UsersService, LocalStrategy],
})
export class AppModule {}
