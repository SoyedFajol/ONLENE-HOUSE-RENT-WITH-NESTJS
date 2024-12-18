import { HouseCategoryService } from './house-category.service';
import { CreateHouseCategoryDto } from './dto/create-house-category.dto';
import { UpdateHouseCategoryDto } from './dto/update-house-category.dto';
export declare class HouseCategoryController {
    private readonly houseCategoryService;
    constructor(houseCategoryService: HouseCategoryService);
    create(createHouseCategoryDto: CreateHouseCategoryDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateHouseCategoryDto: UpdateHouseCategoryDto): string;
    remove(id: string): string;
}
