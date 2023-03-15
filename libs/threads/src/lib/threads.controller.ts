import { Controller, Get, Param, Post } from '@nestjs/common';
import { ThreadsService } from './threads.service';
import { Body } from '@nestjs/common/decorators';

@Controller()
export class ThreadsController {
  constructor(private threadsService: ThreadsService) {}

  @Get('threads')
  public getThreads() {
    return this.threadsService.getThreads();
  }

  @Get('thread/:id')
  public getThread(@Param('id') id: string) {
    return this.threadsService.getThread(id);
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

  @Get('replys/:id')
  public getReplys(@Param('id') id: string) {
    return this.threadsService.getThreadReplies(id);
  }

  @Post('reply')
  async createReply(@Body() data: { threadId: string; content: string }) {
    const { threadId, content } = data;
    return await this.threadsService.createThreadReply(threadId, content);
  }

}
