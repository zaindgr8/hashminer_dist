import { Response } from "express";
interface FileParams {
    fileName: string;
}
export declare class AppController {
    getHello(): string;
    uploadFile(file: any): Promise<string>;
    getFile(res: Response, file: FileParams): void;
}
export {};
