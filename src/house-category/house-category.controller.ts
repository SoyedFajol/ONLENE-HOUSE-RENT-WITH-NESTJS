import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HouseCategoryService } from './house-category.service';
import { CreateHouseCategoryDto } from './dto/create-house-category.dto';
import { UpdateHouseCategoryDto } from './dto/update-house-category.dto';

@Controller('house-category')
export class HouseCategoryController {
  constructor(private readonly houseCategoryService: HouseCategoryService) {}

  @Post()
  create(@Body() createHouseCategoryDto: CreateHouseCategoryDto) {
    return this.houseCategoryService.create(createHouseCategoryDto);
  }

  @Get()
  findAll() {
    return this.houseCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.houseCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHouseCategoryDto: UpdateHouseCategoryDto) {
    return this.houseCategoryService.update(+id, updateHouseCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.houseCategoryService.remove(+id);
  }
}
