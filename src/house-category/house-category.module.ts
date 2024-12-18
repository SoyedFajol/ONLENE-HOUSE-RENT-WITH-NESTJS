import { Module } from '@nestjs/common';
import { HouseCategoryService } from './house-category.service';
import { HouseCategoryController } from './house-category.controller';

@Module({
  controllers: [HouseCategoryController],
  providers: [HouseCategoryService],
})
export class HouseCategoryModule {}
