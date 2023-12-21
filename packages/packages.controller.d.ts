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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { PackagesService } from './packages.service';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';
import { AssignPackageDto } from './dto/assign_package.dto';
export declare class PackagesController {
    private readonly packagesService;
    constructor(packagesService: PackagesService);
    create(createPackageDto: CreatePackageDto, req: any): Promise<import("mongoose").Document<unknown, {}, import("./entities/package.entity").Package> & import("./entities/package.entity").Package & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(req: any): Promise<(import("mongoose").Document<unknown, {}, import("./entities/package.entity").Package> & import("./entities/package.entity").Package & {
        _id: import("mongoose").Types.ObjectId;
    })[] | "This action returns all packages">;
    update(id: string, updatePackageDto: UpdatePackageDto): string;
    remove(id: string): string;
    assignPackage(req: any, response: any, packageInfo: AssignPackageDto): Promise<any>;
    getAllUserPackages(req: any, response: any): Promise<any>;
}
