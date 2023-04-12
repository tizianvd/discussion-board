import {
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import { compare, hash } from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthEntity } from '../entity/auth.entity';

const prisma = new PrismaClient();

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  async login(login: string, password: string): Promise<AuthEntity> {
    const user = await prisma.user.findUnique({ where: { login: login } });

    Logger.log(`Login: ${login} password:${password}`);

    if (!user) {
      throw new NotFoundException(`No user found for login: ${login}`);
    }

    const isPasswordValid = compare(user.password, password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    return {
      accessToken: this.jwtService.sign({ login: user.login },  {secret: process.env.SECRETKEY}),
    };
  }
  async register(data: CreateUserDto) {
    return prisma.user.create({
      data: {
        login: data.login,
        name: data.name,
        password: await hash(data.password, 10),
      },
    });
  }
}
