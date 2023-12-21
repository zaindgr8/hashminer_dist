import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(file: any, res: any, req: any, taskInfo: CreateTaskDto): Promise<void>;
    update(file: any, id: string, res: any, updateTaskDto: CreateTaskDto): Promise<void>;
    tasks(res: any, req: any): Promise<void>;
    taskById(id: string, res: any): Promise<void>;
    delete(id: string, res: any, req: any): Promise<void>;
}
