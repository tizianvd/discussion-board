import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto, LoginUserDto, UpdatePasswordDto } from './user.dto';
import { compare, hash } from 'bcrypt';
import { PrismaClient, User } from '@prisma/client';


interface FormatLogin extends Partial<User> {
  login: string;
};

const prisma = new PrismaClient();

@Injectable()
export class UsersService {
  async updatePassword(payload: UpdatePasswordDto, id: number): Promise<User> {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new HttpException('invalid_credentials', HttpStatus.UNAUTHORIZED);
    }

    const areEqual = await compare(payload.old_password, user.password);
    if (!areEqual) {
      throw new HttpException('invalid_credentials', HttpStatus.UNAUTHORIZED);
    }
    return await prisma.user.update({
      where: { id },
      data: { password: await hash(payload.new_password, 10) },
    });
  }

  async findByLogin({ login, password }: LoginUserDto): Promise<FormatLogin> {
    const user = await prisma.user.findFirst({
      where: { login },
    });

    if (!user) {
      throw new HttpException('invalid_credentials', HttpStatus.UNAUTHORIZED);
    }

    const areEqual = await compare(password, user.password);

    if (!areEqual) {
      throw new HttpException('invalid_credentials', HttpStatus.UNAUTHORIZED);
    }

    const { password: p, ...rest } = user;
    return rest;
  }

  async findByPayload({ login }: any): Promise<any> {
    return await prisma.user.findFirst({
      where: { login },
    });
  }
}
