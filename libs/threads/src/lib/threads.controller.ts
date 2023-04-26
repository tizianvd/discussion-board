import { Controller, Get, Param, Post } from '@nestjs/common';
import { ThreadsService } from './threads.service';
import { Body } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('thread')
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
  async createThread(
    @Body() data: { title: string; content: string; userId: number }
  ) {
    const { title, content, userId } = data;
    const thread = await this.threadsService.createThread(
      title,
      content,
      userId
    );
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
