"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHouseCategoryDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_house_category_dto_1 = require("./create-house-category.dto");
class UpdateHouseCategoryDto extends (0, mapped_types_1.PartialType)(create_house_category_dto_1.CreateHouseCategoryDto) {
}
exports.UpdateHouseCategoryDto = UpdateHouseCategoryDto;
//# sourceMappingURL=update-house-category.dto.js.map