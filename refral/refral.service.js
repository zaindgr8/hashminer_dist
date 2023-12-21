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
exports.RefralService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const user_entity_1 = require("../user/entities/user.entity");
const mongoose_2 = require("@nestjs/mongoose");
const user_refrals_links_entity_1 = require("../user/entities/user.refrals_links.entity");
const uuid_1 = require("uuid");
let RefralService = class RefralService {
    constructor(userModel, userRefralLinkModel) {
        this.userModel = userModel;
        this.userRefralLinkModel = userRefralLinkModel;
    }
    create(createRefralDto) {
        return 'This action adds a new refral';
    }
    async getrefral(userId) {
        try {
            const user = await this.userModel.findById(userId);
            if (!user) {
                throw new Error('User not found');
            }
            console.log('user', user);
            const referralLink = (0, uuid_1.v4)();
            const userReferralLink = new this.userRefralLinkModel({
                userId: userId,
                refral_links: referralLink,
            });
            await userReferralLink.save();
            const result = { link: referralLink };
            return result;
        }
        catch (error) {
            console.error('Error in getting refral:', error.message);
            throw error;
        }
    }
    findOne(id) {
        return `This action returns a #${id} refral`;
    }
    update(id, updateRefralDto) {
        return `This action updates a #${id} refral`;
    }
    remove(id) {
        return `This action removes a #${id} refral`;
    }
};
exports.RefralService = RefralService;
exports.RefralService = RefralService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(user_entity_1.User.name)),
    __param(1, (0, mongoose_2.InjectModel)(user_refrals_links_entity_1.UserRefralLinks.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], RefralService);
//# sourceMappingURL=refral.service.js.map