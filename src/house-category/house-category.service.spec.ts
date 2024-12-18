import { Test, TestingModule } from '@nestjs/testing';
import { HouseCategoryService } from './house-category.service';

describe('HouseCategoryService', () => {
  let service: HouseCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HouseCategoryService],
    }).compile();

    service = module.get<HouseCategoryService>(HouseCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
