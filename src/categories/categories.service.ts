import { Injectable, Logger } from '@nestjs/common';
import { CategoriesRepository } from './categories.repository';
import { AddCategoryDto } from './dto/add.category.dto';
import { SearchCategoryDto } from './dto/search.category.dto';
import { UpdateCategoryDto } from './dto/update.category.dto';

@Injectable()
export class CategoriesService {
  private readonly logger = new Logger(CategoriesService.name);

  constructor(private categoriesRepository: CategoriesRepository) {}

  add(addCategoryDto: AddCategoryDto) {
    return this.categoriesRepository.add(addCategoryDto);
  }

  getCategories(condition: SearchCategoryDto) {
    return this.categoriesRepository.findAll(condition);
  }

  update(updateCategoryDto: UpdateCategoryDto) {
    this.categoriesRepository.update(updateCategoryDto);
  }

  delete(id: number) {
    return this.categoriesRepository.delete(id);
  }
}
