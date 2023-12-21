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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const createUser_dto_1 = require("./dto/createUser.dto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async registerUser(response, createUserDto) {
        try {
            const newUser = await this.userService.registerUser(createUserDto);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'User Created Successfully',
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: User not created!',
                error: 'Bad Request',
            });
        }
    }
    async login(response, userInfo) {
        try {
            const jwt = await this.userService.login(userInfo);
            return response.status(common_1.HttpStatus.OK).json({
                token: jwt,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Email or Password is Incorrect!',
                error: 'Bad Request',
            });
        }
    }
    async status(response, id) {
        try {
            const userwithupdatedStatus = await this.userService.getstatus(id);
            return response.status(common_1.HttpStatus.FOUND).json({
                status: userwithupdatedStatus,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: In getting user status !',
                error: 'Bad Request',
            });
        }
    }
    async refralBal(response, id) {
        try {
            const refralBal = await this.userService.getRefralBal(id);
            return response.status(common_1.HttpStatus.FOUND).json({
                userRefralBal: refralBal,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: In getting user refral balance !',
                error: 'Bad Request',
            });
        }
    }
    async logout(response, token) {
        try {
            const jwt = await this.userService.logout(token);
            return response.status(common_1.HttpStatus.OK).json({
                token: jwt,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Please Login First!',
                error: 'Bad Request',
            });
        }
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)('/user'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, createUser_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "registerUser", null);
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('/status/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "status", null);
__decorate([
    (0, common_1.Get)('/refral_balabce/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "refralBal", null);
__decorate([
    (0, common_1.Post)('/logout'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "logout", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map