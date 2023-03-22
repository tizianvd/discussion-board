import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
@Injectable()
export class UserService {
    async getUser(username: string) {
        return await prisma.user.findFirst({where: {name: username.toLowerCase()}});
    }
}
