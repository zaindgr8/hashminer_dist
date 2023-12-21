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
exports.RefralController = void 0;
const common_1 = require("@nestjs/common");
const refral_service_1 = require("./refral.service");
const create_refral_dto_1 = require("./dto/create-refral.dto");
const update_refral_dto_1 = require("./dto/update-refral.dto");
let RefralController = class RefralController {
    constructor(refralService) {
        this.refralService = refralService;
    }
    create(createRefralDto) {
        return this.refralService.create(createRefralDto);
    }
    async getRefral(req, response) {
        try {
            const userId = req.id;
            const result = await this.refralService.getrefral(userId);
            return response.status(200).json(result);
        }
        catch (error) {
            console.error('Error in get refral controller:', error.message);
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }
    findOne(id) {
        return this.refralService.findOne(+id);
    }
    update(id, updateRefralDto) {
        return this.refralService.update(+id, updateRefralDto);
    }
    remove(id) {
        return this.refralService.remove(+id);
    }
};
exports.RefralController = RefralController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_refral_dto_1.CreateRefralDto]),
    __metadata("design:returntype", void 0)
], RefralController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RefralController.prototype, "getRefral", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RefralController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_refral_dto_1.UpdateRefralDto]),
    __metadata("design:returntype", void 0)
], RefralController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RefralController.prototype, "remove", null);
exports.RefralController = RefralController = __decorate([
    (0, common_1.Controller)('refral'),
    __metadata("design:paramtypes", [refral_service_1.RefralService])
], RefralController);
//# sourceMappingURL=refral.controller.js.map