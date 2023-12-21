"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefralModule = void 0;
const common_1 = require("@nestjs/common");
const refral_service_1 = require("./refral.service");
const refral_controller_1 = require("./refral.controller");
const auth_middleware_1 = require("../task/auth.middleware");
const user_entity_1 = require("../user/entities/user.entity");
const mongoose_1 = require("@nestjs/mongoose");
const user_refral_balance_entity_1 = require("./entities/user.refral.balance.entity");
const user_refrals_links_entity_1 = require("../user/entities/user.refrals_links.entity");
let RefralModule = class RefralModule {
    configure(consumer) {
        consumer.apply(auth_middleware_1.AuthMiddleWare).forRoutes("refral");
    }
};
exports.RefralModule = RefralModule;
exports.RefralModule = RefralModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: "User", schema: user_entity_1.UserSchema }, { name: "UserRefralBalance", schema: user_refral_balance_entity_1.UserRefralBalanceSchema }, { name: "UserRefralLinks", schema: user_refrals_links_entity_1.UserRefralLinksSchema }])],
        controllers: [refral_controller_1.RefralController],
        providers: [refral_service_1.RefralService],
    })
], RefralModule);
//# sourceMappingURL=refral.module.js.map