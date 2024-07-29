import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { AddCategoryDto } from './dto/add.category.dto';
import { SearchCategoryDto } from './dto/search.category.dto';
import { UpdateCategoryDto } from './dto/update.category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  addCategory(@Body() body: AddCategoryDto) {
    return this.categoriesService.add(body);
  }

  @Get()
  getCategories(@Query() query: SearchCategoryDto) {
    return this.categoriesService.getCategories(query);
  }

  @Patch('/:id')
  updateCategory(@Body() body: UpdateCategoryDto) {
    return this.categoriesService.update(body);
  }

  @Delete('/:id')
  deleteCategory(@Param('id') id: number) {
    return this.categoriesService.delete(id);
  }
}
