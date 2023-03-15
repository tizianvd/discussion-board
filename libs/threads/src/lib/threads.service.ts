import { Injectable, Logger } from '@nestjs/common';
import { PrismaClient, Thread, Prisma } from '@prisma/client'

const prisma = new PrismaClient()
@Injectable()
export class ThreadsService {
    public getThreads(): Promise<Thread[]> {
        return prisma.thread.findMany()
    }

    public createThread(data: Prisma.ThreadCreateInput): Promise<Thread> {
        Logger.log(data)
        return prisma.thread.create({data});
    }
}
