import { Injectable } from '@nestjs/common';
import { PrismaClient, Thread, Prisma, ThreadReply } from '@prisma/client';

const prisma = new PrismaClient();
@Injectable()
export class ThreadsService {
  public async getThread(id: string): Promise<Thread> {
    return prisma.thread.findUnique({
      where: {
        id: id,
      },
    });
  }

  public getThreads(): Promise<Thread[]> {
    return prisma.thread.findMany();
  }

  public async getThreadReplies(id: string): Promise<ThreadReply[]> {
    return prisma.threadReply.findMany({
      where: {
        threadId: id,
      },
    });
  }

  public async createThread(params: {
    data: Prisma.ThreadCreateInput;
  }): Promise<Thread> {
    const { data } = params;
    return await prisma.thread.create({ data });
  }

  public async createThreadReply(
    threadId: string,
    content: string
  ): Promise<ThreadReply> {
    return await prisma.threadReply.create({
      data: {
        content: content,
        Thread: {
          connect: {
            id: threadId,
          },
        },
      },
    });
  }
}
