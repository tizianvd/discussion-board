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

  public async createThread(
    title: string,
    content: string,
    userid: number
  ): Promise<Thread> {
    return await prisma.thread.create({  
      data : {
        title: title,
        content: content,
        User: {
          connect: {
            id: userid,
          },
        }
      }
    });
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
