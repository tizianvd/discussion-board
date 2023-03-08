import { Controller, Get, Post } from '@nestjs/common';
import { ThreadsService } from './threads.service';
import { Thread } from '@prisma/client';

@Controller('threads')
export class ThreadsController {
  constructor(private threadsService: ThreadsService) {}

  @Get() 
  public getThreads() {
    return this.threadsService.getThreads()
  }

  @Post()
  public createThread(thread: Thread) {
    this.threadsService.addThread(thread);
  }
}
