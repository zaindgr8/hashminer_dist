import { NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";
export declare class AuthMiddleWare implements NestMiddleware {
    use(req: any, res: any, next: NextFunction): any;
}
