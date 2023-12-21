import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    registerUser(response: any, createUserDto: CreateUserDto): Promise<any>;
    login(response: any, userInfo: {
        email: string;
        password: string;
    }): Promise<any>;
    status(response: any, id: string): Promise<any>;
    refralBal(response: any, id: string): Promise<any>;
    logout(response: any, token: string): Promise<any>;
}
