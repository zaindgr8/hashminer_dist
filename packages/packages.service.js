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
exports.PackagesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_entity_1 = require("../user/entities/user.entity");
const package_entity_1 = require("./entities/package.entity");
const mongoose_2 = require("mongoose");
const user_packages_entity_1 = require("./entities/user_packages.entity");
let PackagesService = class PackagesService {
    constructor(userModel, packageModel, userPackageModel) {
        this.userModel = userModel;
        this.packageModel = packageModel;
        this.userPackageModel = userPackageModel;
    }
    async create(createPackageDto, userId) {
        try {
            const user = await this.userModel.findById(userId);
            console.log('user', user);
            if (!user || !user.is_admin) {
                throw new Error('Only Admin can add package');
            }
            const { price } = createPackageDto;
            console.log('Price', price);
            const existingPackage = await this.packageModel.findOne({ price });
            console.log('existingPackage', existingPackage);
            if (existingPackage) {
                throw new Error('A package with this price already exists');
            }
            const newPackage = await this.packageModel.create({ price: price });
            return newPackage;
        }
        catch (error) {
            console.error('Error in adding package:', error.message);
            throw error;
        }
    }
    async findAll(userId) {
        try {
            const user = await this.userModel.findById(userId);
            console.log('user', user);
            if (!user || !user.is_admin) {
                throw new Error('Only Admin can see packages list');
            }
            const packages = await this.packageModel.find().exec();
            return packages;
        }
        catch (error) {
            console.error('Error fetching packages:', error.message);
            throw error;
        }
        return `This action returns all packages`;
    }
    findOne(id) {
        console.log("hereeee ");
        return `This action returns a #${id} package`;
    }
    update(id, updatePackageDto) {
        return `This action updates a #${id} package`;
    }
    remove(id) {
        return `This action removes a #${id} package`;
    }
    async assign_package(assignPackageDto) {
        try {
            const { email, packageId, price, startDate, expireDate } = assignPackageDto;
            const user = await this.userModel.findOne({ email });
            if (!user) {
                throw new common_1.NotFoundException('User not found');
            }
            const userPackage = new this.userPackageModel({
                userId: user._id,
                price: price,
                startDate: new Date(startDate),
                expiryDate: new Date(expireDate),
                status: 'active',
            });
            await userPackage.save();
            user.userPackages.push(userPackage.id);
            user.status = 'assigned';
            return await user.save();
        }
        catch (error) {
            console.error('Error in assigning package to user:', error.message);
            throw error;
        }
    }
    async requestPackage(userId) {
        try {
            const user = await this.userModel.findById(userId);
            console.log('user', user);
            if (!user) {
                throw new Error('User not found');
            }
            user.status = 'pending';
            return await user.save();
        }
        catch (error) {
            console.error('Error updating user status:', error.message);
            throw error;
        }
    }
    async getAllUserPackages(userId) {
        try {
            console.log("In get all user packages service");
            console.log("userId", userId);
            const userPackages = await this.userPackageModel.find({ userId }).exec();
            console.log("userPackages", userPackages);
            return userPackages;
        }
        catch (error) {
            throw new Error('Error in getAllUserPackages service: ' + error.message);
        }
    }
};
exports.PackagesService = PackagesService;
exports.PackagesService = PackagesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(package_entity_1.Package.name)),
    __param(2, (0, mongoose_1.InjectModel)(user_packages_entity_1.UserPackage.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], PackagesService);
//# sourceMappingURL=packages.service.js.map