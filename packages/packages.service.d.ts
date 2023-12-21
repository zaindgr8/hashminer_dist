/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';
import { User } from '../user/entities/user.entity';
import { Package } from './entities/package.entity';
import { Model } from 'mongoose';
import { AssignPackageDto } from './dto/assign_package.dto';
import { UserPackage } from './entities/user_packages.entity';
import { Types } from 'mongoose';
export declare class PackagesService {
    private readonly userModel;
    private readonly packageModel;
    private readonly userPackageModel;
    constructor(userModel: Model<User>, packageModel: Model<Package>, userPackageModel: Model<UserPackage>);
    create(createPackageDto: CreatePackageDto, userId: string): Promise<import("mongoose").Document<unknown, {}, Package> & Package & {
        _id: Types.ObjectId;
    }>;
    findAll(userId: string): Promise<(import("mongoose").Document<unknown, {}, Package> & Package & {
        _id: Types.ObjectId;
    })[] | "This action returns all packages">;
    findOne(id: number): string;
    update(id: number, updatePackageDto: UpdatePackageDto): string;
    remove(id: number): string;
    assign_package(assignPackageDto: AssignPackageDto): Promise<User>;
    requestPackage(userId: string): Promise<any>;
    getAllUserPackages(userId: string): Promise<UserPackage[]>;
}
