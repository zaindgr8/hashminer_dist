"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleWare = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
let AuthMiddleWare = class AuthMiddleWare {
    use(req, res, next) {
        const token = req.headers['authorization'];
        try {
            const secretKey = "secretKey";
            const decoded = jwt.verify(token, secretKey);
            const userId = decoded.user_id;
            req.id = userId;
            console.log("Token Valid");
            next();
        }
        catch (error) {
            console.log("Token Invalid");
            if (error.name === 'TokenExpiredError') {
                return res.status(500).json({ error: 'Token has expired.' });
            }
            else {
                return res.status(500).json({ error: 'Token is invalid' });
            }
        }
    }
};
exports.AuthMiddleWare = AuthMiddleWare;
exports.AuthMiddleWare = AuthMiddleWare = __decorate([
    (0, common_1.Injectable)()
], AuthMiddleWare);
//# sourceMappingURL=auth.middleware.js.map