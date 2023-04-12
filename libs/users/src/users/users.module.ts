import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { APP_GUARD } from '@nestjs/core';
import { LocalAuthGuard } from '../auth/local-auth-guard';
@Module({
  controllers: [UsersController],
  providers: [UsersService,
    {
        provide: APP_GUARD,
        useClass: LocalAuthGuard,
      },],
  // imports: [PrismaModule],
  exports: [UsersService],
})
export class UsersModule {}
