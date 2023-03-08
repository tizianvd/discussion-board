import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ThreadsController, ThreadsService } from '@discussion-board/threads';

@Module({
  imports: [],
  controllers: [AppController, ThreadsController],
  providers: [AppService, ThreadsService],
})
export class AppModule {}
