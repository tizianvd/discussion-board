import { Injectable } from '@nestjs/common';
import { PrismaClient, Thread } from '@prisma/client'

const prisma = new PrismaClient()
@Injectable()
export class ThreadsService {
    public getThreads(): Promise<Thread[]> {
        return prisma.thread.findMany()
    }

    public addThread(thread: Thread): void {
        prisma.thread.create({data: thread});
    }
}
