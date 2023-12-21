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
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let TaskService = class TaskService {
    constructor(taskModel) {
        this.taskModel = taskModel;
    }
    async createTask(createTaskDto) {
        console.log("In service");
        const addedtask = await this.taskModel.create(createTaskDto);
        return addedtask;
    }
    async tasks(id) {
        console.log("Id in task service", id);
        const tasksList = await this.taskModel.find({ userId: id });
        console.log("tasksList in service", tasksList);
        return tasksList;
    }
    async taskById(id) {
        const task = await this.taskModel.findById(id);
        return task;
    }
    async update(id, updateTaskInfo) {
        const updatedTask = await this.taskModel.findOneAndUpdate({ _id: id }, { $set: { title: updateTaskInfo.title, description: updateTaskInfo.description,
                image: updateTaskInfo.image
            } }, { new: true });
        return updatedTask;
    }
    async delete(id) {
        await this.taskModel.deleteOne({ _id: id });
        return `Deleted Successfully`;
    }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("Task")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TaskService);
//# sourceMappingURL=task.service.js.map