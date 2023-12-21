import { RefralService } from './refral.service';
import { CreateRefralDto } from './dto/create-refral.dto';
import { UpdateRefralDto } from './dto/update-refral.dto';
export declare class RefralController {
    private readonly refralService;
    constructor(refralService: RefralService);
    create(createRefralDto: CreateRefralDto): string;
    getRefral(req: any, response: any): Promise<any>;
    findOne(id: string): string;
    update(id: string, updateRefralDto: UpdateRefralDto): string;
    remove(id: string): string;
}
