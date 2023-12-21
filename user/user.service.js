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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const jwt = require("jsonwebtoken");
const user_refrals_links_entity_1 = require("./entities/user.refrals_links.entity");
let UserService = class UserService {
    constructor(userModel, userRefralBalanceModel, userRefralLinksModel) {
        this.userModel = userModel;
        this.userRefralBalanceModel = userRefralBalanceModel;
        this.userRefralLinksModel = userRefralLinksModel;
    }
    async registerUser(createUserDto) {
        try {
            if (createUserDto.refral_Link) {
                console.log('registering with refral');
                const link = createUserDto.refral_Link;
                console.log('link', link);
                const linkerUserInfo = await this.userRefralLinksModel.findOne({
                    refral_links: createUserDto.refral_Link
                });
                console.log("linkerUserInfo", linkerUserInfo);
                const linkerUser = await this.userModel.findOne({
                    _id: linkerUserInfo.userId
                });
                console.log("linkerUser", linkerUser);
                const userData = {
                    ...createUserDto,
                    father: linkerUser?._id,
                    grandfather: linkerUser?.father,
                };
                let father = linkerUser?._id;
                let grandfather = linkerUser?.father;
                if (father) {
                    const faterRefaralBalabce = await this.userRefralBalanceModel.findOne({ userId: father });
                    console.log('faterRefaralBalabce', faterRefaralBalabce);
                    let updatedBalance;
                    if (faterRefaralBalabce) {
                        updatedBalance = faterRefaralBalabce?.refral_balance + 20;
                        await this.userRefralBalanceModel.findOneAndUpdate({ userId: father }, { $set: { refral_balance: updatedBalance } }, { new: true });
                    }
                    else {
                        const firstGrandFatherRefralBal = {
                            userId: father,
                            refral_balance: 20,
                        };
                        const firstGrandFatherRefral = new this.userRefralBalanceModel(firstGrandFatherRefralBal);
                        await firstGrandFatherRefral.save();
                    }
                }
                if (grandfather) {
                    const grandFaterRefaralBalabce = await this.userRefralBalanceModel.findOne({ userId: grandfather });
                    console.log('grandFaterRefaralBalabce', grandFaterRefaralBalabce);
                    if (grandFaterRefaralBalabce) {
                        const updatedBalance = grandFaterRefaralBalabce?.refral_balance + 10;
                        await this.userRefralBalanceModel.findOneAndUpdate({ userId: grandfather }, { $set: { refral_balance: updatedBalance } }, { new: true });
                    }
                    else {
                        const grandFatherRefral = {
                            userId: grandfather,
                            refral_balance: 10,
                        };
                        const firstGrandFatherRefral = new this.userRefralBalanceModel(grandFatherRefral);
                        await firstGrandFatherRefral.save();
                    }
                }
                const new_user = await new this.userModel(userData);
                return new_user.save();
            }
            const newUser = await new this.userModel(createUserDto);
            return newUser.save();
        }
        catch (error) {
            console.log('error', error);
            return error.message;
        }
    }
    async login(userInfo) {
        const user = await this.userModel.findOne(userInfo);
        console.log('user', user);
        if (!user) {
            throw new common_1.NotFoundException(`Did not found user with #${userInfo} !`);
        }
        const secretKey = 'secretKey';
        const { _id, name, email, status, is_admin } = user;
        const token = jwt.sign({ user_id: _id, name, email, status, is_admin }, secretKey, {
            algorithm: 'HS256',
        });
        console.log('JWT Token:', token);
        return token;
    }
    async getstatus(id) {
        const user = await this.userModel.findOne({ _id: id });
        console.log('user', user);
        if (!user) {
            throw new common_1.NotFoundException(`Did not found user with #${id} !`);
        }
        const status = user.status;
        return status;
    }
    async getRefralBal(id) {
        try {
            const user = await this.userModel.findOne({ _id: id });
            console.log('user', user);
            if (!user) {
                throw new common_1.NotFoundException(`Did not found user with #${id} !`);
            }
            const userRefral = await this.userRefralBalanceModel.findOne({
                userId: id,
            });
            const userRefralBalance = userRefral?.refral_balance;
            console.log('userRefralBalance', userRefralBalance);
            return userRefralBalance;
        }
        catch (error) {
            console.log('error');
            return error.message;
        }
    }
    async logout(token) {
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __param(1, (0, mongoose_1.InjectModel)('UserRefralBalance')),
    __param(2, (0, mongoose_1.InjectModel)(user_refrals_links_entity_1.UserRefralLinks.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], UserService);
//# sourceMappingURL=user.service.js.map