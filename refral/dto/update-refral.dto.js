"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRefralDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_refral_dto_1 = require("./create-refral.dto");
class UpdateRefralDto extends (0, mapped_types_1.PartialType)(create_refral_dto_1.CreateRefralDto) {
}
exports.UpdateRefralDto = UpdateRefralDto;
//# sourceMappingURL=update-refral.dto.js.map