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
exports.HouseCategoryController = void 0;
const common_1 = require("@nestjs/common");
const house_category_service_1 = require("./house-category.service");
const create_house_category_dto_1 = require("./dto/create-house-category.dto");
const update_house_category_dto_1 = require("./dto/update-house-category.dto");
let HouseCategoryController = class HouseCategoryController {
    constructor(houseCategoryService) {
        this.houseCategoryService = houseCategoryService;
    }
    create(createHouseCategoryDto) {
        return this.houseCategoryService.create(createHouseCategoryDto);
    }
    findAll() {
        return this.houseCategoryService.findAll();
    }
    findOne(id) {
        return this.houseCategoryService.findOne(+id);
    }
    update(id, updateHouseCategoryDto) {
        return this.houseCategoryService.update(+id, updateHouseCategoryDto);
    }
    remove(id) {
        return this.houseCategoryService.remove(+id);
    }
};
exports.HouseCategoryController = HouseCategoryController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_house_category_dto_1.CreateHouseCategoryDto]),
    __metadata("design:returntype", void 0)
], HouseCategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HouseCategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HouseCategoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_house_category_dto_1.UpdateHouseCategoryDto]),
    __metadata("design:returntype", void 0)
], HouseCategoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HouseCategoryController.prototype, "remove", null);
exports.HouseCategoryController = HouseCategoryController = __decorate([
    (0, common_1.Controller)('house-category'),
    __metadata("design:paramtypes", [house_category_service_1.HouseCategoryService])
], HouseCategoryController);
//# sourceMappingURL=house-category.controller.js.map