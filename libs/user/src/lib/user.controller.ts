import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthenticatedGuard, LocalAuthGuard } from '@discussion-board/auth'

@Controller("user")
export class UserController {
    @UseGuards(LocalAuthGuard)
    @Post('/login')
    public login(@Request() req): any {
      return {User: req.user, msg: 'User logged in'}
    }

    @UseGuards(AuthenticatedGuard)
    @Get('/protected')
    getHello(@Request() req): string {
      return req.user;
    }
}
