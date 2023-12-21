"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesController = void 0;
const common_1 = require("@nestjs/common");
const packages_service_1 = require("./packages.service");
const create_package_dto_1 = require("./dto/create-package.dto");
const update_package_dto_1 = require("./dto/update-package.dto");
const assign_package_dto_1 = require("./dto/assign_package.dto");
let PackagesController = class PackagesController {
    constructor(packagesService) {
        this.packagesService = packagesService;
    }
    create(createPackageDto, req) {
        const userId = req.id;
        return this.packagesService.create(createPackageDto, userId);
    }
    findAll(req) {
        const userId = req.id;
        return this.packagesService.findAll(userId);
    }
    update(id, updatePackageDto) {
        return this.packagesService.update(+id, updatePackageDto);
    }
    remove(id) {
        return this.packagesService.remove(+id);
    }
    async assignPackage(req, response, packageInfo) {
        try {
            const result = await this.packagesService.assign_package(packageInfo);
            console.log('Result from assignPackage:', result);
            return response.status(200).json(result);
        }
        catch (error) {
            console.error('Error in assignPackage controller:', error.message);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }
    async getAllUserPackages(req, response) {
        try {
            console.log("called ***********");
            const userId = req.id;
            console.log("userId in controller", userId);
            const userPackages = await this.packagesService.getAllUserPackages(userId);
            return response.status(200).json(userPackages);
        }
        catch (error) {
            console.error('Error in getAllUserPackages controller:', error.message);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }
};
exports.PackagesController = PackagesController;
__decorate([
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_package_dto_1.CreatePackageDto, Object]),
    __metadata("design:returntype", void 0)
], PackagesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PackagesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_package_dto_1.UpdatePackageDto]),
    __metadata("design:returntype", void 0)
], PackagesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PackagesController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('/assign_package'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, assign_package_dto_1.AssignPackageDto]),
    __metadata("design:returntype", Promise)
], PackagesController.prototype, "assignPackage", null);
__decorate([
    (0, common_1.Get)('/user_packages'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PackagesController.prototype, "getAllUserPackages", null);
exports.PackagesController = PackagesController = __decorate([
    (0, common_1.Controller)('packages'),
    __metadata("design:paramtypes", [packages_service_1.PackagesService])
], PackagesController);
//# sourceMappingURL=packages.controller.js.map