import { Controller, Get } from '@nestjs/common';
import { ThreadsService } from './threads.service';

@Controller('threads')
export class ThreadsController {
  constructor(private threadsService: ThreadsService) {}

  @Get() 
  public getThreads() {
    return this.threadsService.getThreads()
  }
}
