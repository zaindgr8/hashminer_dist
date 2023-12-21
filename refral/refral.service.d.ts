import { CreateRefralDto } from './dto/create-refral.dto';
import { UpdateRefralDto } from './dto/update-refral.dto';
import { Model } from 'mongoose';
import { User } from '../user/entities/user.entity';
import { UserRefralLinks } from 'src/user/entities/user.refrals_links.entity';
export declare class RefralService {
    private readonly userModel;
    private readonly userRefralLinkModel;
    constructor(userModel: Model<User>, userRefralLinkModel: Model<UserRefralLinks>);
    create(createRefralDto: CreateRefralDto): string;
    getrefral(userId: string): Promise<{
        link: string;
    }>;
    findOne(id: number): string;
    update(id: number, updateRefralDto: UpdateRefralDto): string;
    remove(id: number): string;
}
