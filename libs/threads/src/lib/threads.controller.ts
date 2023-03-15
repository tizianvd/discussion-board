import { Controller, Get, Logger, Post } from '@nestjs/common';
import { ThreadsService } from './threads.service';
import { Body } from '@nestjs/common/decorators';

@Controller('threads')
export class ThreadsController {
  constructor(private threadsService: ThreadsService) {}

  @Get() 
  public getThreads() {
    return this.threadsService.getThreads()
  }

  @Post()
  public createThread(@Body() data) {
    this.threadsService.createThread(data);
  }
}
