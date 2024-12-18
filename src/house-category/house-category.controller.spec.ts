import { Test, TestingModule } from '@nestjs/testing';
import { HouseCategoryController } from './house-category.controller';
import { HouseCategoryService } from './house-category.service';

describe('HouseCategoryController', () => {
  let controller: HouseCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HouseCategoryController],
      providers: [HouseCategoryService],
    }).compile();

    controller = module.get<HouseCategoryController>(HouseCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
