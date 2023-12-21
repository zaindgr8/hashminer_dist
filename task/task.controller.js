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
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const task_service_1 = require("./task.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const create_task_dto_1 = require("./dto/create-task.dto");
let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    async create(file, res, req, taskInfo) {
        try {
            const id = req.id;
            const taskData = {
                title: taskInfo.title,
                description: taskInfo.description,
                image: file.filename,
                userId: id,
            };
            const newtask = await this.taskService.createTask(taskData);
            res.status(common_1.HttpStatus.CREATED).json({
                message: 'Task Added Successfully',
            });
        }
        catch (error) {
            res.status(common_1.HttpStatus.BAD_REQUEST).json({
                error: 'Could not add task',
            });
        }
    }
    async update(file, id, res, updateTaskDto) {
        try {
            const taskData = {
                title: updateTaskDto.title,
                description: updateTaskDto.description,
                image: file.filename
            };
            const task = await this.taskService.update(id, taskData);
            res.status(common_1.HttpStatus.ACCEPTED).json({
                message: task,
            });
        }
        catch (error) {
            res.status(common_1.HttpStatus.BAD_REQUEST).json({
                error: `Error in Updating task with id : ${id}`,
            });
        }
    }
    async tasks(res, req) {
        try {
            const id = req.id;
            const tasksList = await this.taskService.tasks(id);
            res.status(common_1.HttpStatus.CREATED).json({
                message: tasksList,
            });
        }
        catch (error) {
            res.status(common_1.HttpStatus.BAD_REQUEST).json({
                error: 'Could not Fetch tasks',
            });
        }
    }
    async taskById(id, res) {
        try {
            const task = await this.taskService.taskById(id);
            res.status(common_1.HttpStatus.CREATED).json({
                message: task,
            });
        }
        catch (error) {
            res.status(common_1.HttpStatus.BAD_REQUEST).json({
                error: `Could not Fetch task with id : ${id}`,
            });
        }
    }
    async delete(id, res, req) {
        try {
            const task = await this.taskService.delete(id);
            res.status(common_1.HttpStatus.ACCEPTED).json({
                message: `Task with id: ${id} deleted successfully  `,
            });
        }
        catch (error) {
            res.status(common_1.HttpStatus.BAD_REQUEST).json({
                error: `Error in Deleting task with id : ${id}`,
            });
        }
    }
};
exports.TaskController = TaskController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                cb(null, `${Date.now()}_${file.originalname}`);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Req)()),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, create_task_dto_1.CreateTaskDto]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                cb(null, `${Date.now()}_${file.originalname}`);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Res)()),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object, create_task_dto_1.CreateTaskDto]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "tasks", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "taskById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "delete", null);
exports.TaskController = TaskController = __decorate([
    (0, common_1.Controller)('task'),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskController);
//# sourceMappingURL=task.controller.js.map