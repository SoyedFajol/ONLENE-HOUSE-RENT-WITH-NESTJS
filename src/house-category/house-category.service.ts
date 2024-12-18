import { Injectable } from '@nestjs/common';
import { CreateHouseCategoryDto } from './dto/create-house-category.dto';
import { UpdateHouseCategoryDto } from './dto/update-house-category.dto';

@Injectable()
export class HouseCategoryService {
  create(createHouseCategoryDto: CreateHouseCategoryDto) {
    return 'This action adds a new houseCategory';
  }

  findAll() {
    return `This action returns all houseCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} houseCategory`;
  }

  update(id: number, updateHouseCategoryDto: UpdateHouseCategoryDto) {
    return `This action updates a #${id} houseCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} houseCategory`;
  }
}
