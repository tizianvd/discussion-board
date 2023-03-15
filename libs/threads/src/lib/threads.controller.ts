import { Controller, Get, Logger, Post } from '@nestjs/common';
import { ThreadsService } from './threads.service';
import { Body } from '@nestjs/common/decorators';

@Controller()
export class ThreadsController {
  constructor(private threadsService: ThreadsService) {}

  @Get('threads')
  public getThreads() {
    return this.threadsService.getThreads();
  }

  @Post('thread')
  async createThread(@Body() data: { title: string; content: string }) {
    const { title, content } = data;
    const thread = await this.threadsService.createThread({
      data: {
        title,
        content,
      },
    });
    return thread;
  }
}
