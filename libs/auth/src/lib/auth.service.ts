// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { UserService } from "@discussion-board/user";
import { Injectable, NotAcceptableException } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService){}
    async validateUser(username: string, password: string){
        const user = await this.userService.getUser(username);
        const passwordValid = await bcrypt.compare(password, user.password);
        if (!user) {
            throw new NotAcceptableException('could not find the user');
        }

        if (user && passwordValid) {
            return {
                userId: user.id,
                username: user.name,
            }
        }

        return null;
    }

}