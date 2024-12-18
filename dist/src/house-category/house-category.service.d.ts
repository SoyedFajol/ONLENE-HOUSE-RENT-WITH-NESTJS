import { CreateHouseCategoryDto } from './dto/create-house-category.dto';
import { UpdateHouseCategoryDto } from './dto/update-house-category.dto';
export declare class HouseCategoryService {
    create(createHouseCategoryDto: CreateHouseCategoryDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateHouseCategoryDto: UpdateHouseCategoryDto): string;
    remove(id: number): string;
}
