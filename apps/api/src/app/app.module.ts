import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ThreadsController, ThreadsService } from '@discussion-board/threads';
import { UserController, UserService } from '@discussion-board/user';

@Module({
  imports: [],
  controllers: [AppController, ThreadsController, UserController],
  providers: [AppService, ThreadsService, UserService],
})
export class AppModule {}
