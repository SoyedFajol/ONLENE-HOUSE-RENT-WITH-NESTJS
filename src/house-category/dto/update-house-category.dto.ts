import { PartialType } from '@nestjs/mapped-types';
import { CreateHouseCategoryDto } from './create-house-category.dto';

export class UpdateHouseCategoryDto extends PartialType(CreateHouseCategoryDto) {}
