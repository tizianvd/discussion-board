import { Injectable, Logger } from '@nestjs/common';
import { PrismaClient, Thread, Prisma } from '@prisma/client'

const prisma = new PrismaClient()
@Injectable()
export class ThreadsService {
    public getThreads(): Promise<Thread[]> {
        return prisma.thread.findMany()
    }

    public async createThread(params: {data: Prisma.ThreadCreateInput}): Promise<Thread> {
        const {data} = params
        return await prisma.thread.create({data});
    }
}
