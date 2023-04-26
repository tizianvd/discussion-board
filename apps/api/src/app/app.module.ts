import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ThreadsController, ThreadsService } from '@discussion-board/threads';
import { AuthController, AuthModule, UsersController, UsersModule} from '@discussion-board/users'

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, ThreadsController, UsersController],
  providers: [AppService, ThreadsService],
})
export class AppModule {}
