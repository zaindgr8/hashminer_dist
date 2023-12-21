import { CreateUserDto } from './dto/createUser.dto';
import { Model } from 'mongoose';
import { UserRefralBalance } from './entities/user.refral.balance.entity';
import { User } from './entities/user.entity';
import { UserRefralLinks } from './entities/user.refrals_links.entity';
export declare class UserService {
    private userModel;
    private userRefralBalanceModel;
    private userRefralLinksModel;
    constructor(userModel: Model<User>, userRefralBalanceModel: Model<UserRefralBalance>, userRefralLinksModel: Model<UserRefralLinks>);
    registerUser(createUserDto: CreateUserDto): Promise<any>;
    login(userInfo: {
        email: string;
        password: string;
    }): Promise<string>;
    getstatus(id: string): Promise<any>;
    getRefralBal(id: string): Promise<any>;
    logout(token: string): Promise<any>;
}
