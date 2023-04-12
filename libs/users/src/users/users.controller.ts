import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from '../entity/user.entity';
import { UserUpdateDto } from '../auth/dto/user-update.dto';
import { LocalAuthGuard } from '../auth/local-auth-guard';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(LocalAuthGuard)
  @ApiBearerAuth()
  @Get()
  @ApiOkResponse({ type: UserEntity, isArray: true })
  async findAll() {
    const users = await this.usersService.findAll();
    return users.map((user) => new UserEntity(user));
  }

  @UseGuards(LocalAuthGuard)
  @ApiBearerAuth()
  @Get(':id')
  @ApiOkResponse({ type: UserEntity })
  async findOne(@Param('id') login: string) {
    return new UserEntity(await this.usersService.findOne(login));
  }

  @Patch(':id')
  @UseGuards(LocalAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: UserEntity })
  async update(
    @Param('login') login: string,
    @Body() updateUserDto: UserUpdateDto
  ) {
    return new UserEntity(await this.usersService.update(login, updateUserDto));
  }

  @Delete(':id')
  @UseGuards(LocalAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: UserEntity })
  async remove(@Param('login') login: string) {
    return new UserEntity(await this.usersService.remove(login));
  }
}