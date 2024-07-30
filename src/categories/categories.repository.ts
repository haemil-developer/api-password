import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../entities/category.entity';
import { Repository } from 'typeorm';
import { AddCategoryDto } from './dto/add.category.dto';
import { SearchCategoryDto } from './dto/search.category.dto';
import { SearchConditionUtil } from '../utils/search.condition.util';
import { UpdateCategoryDto } from './dto/update.category.dto';

@Injectable()
export class CategoriesRepository {
  constructor(
    @InjectRepository(Category)
    private category: Repository<Category>,
  ) {}

  add(addCategoryDto: AddCategoryDto) {
    const category = this.category.create({
      ...addCategoryDto,
    });
    return this.category.save(category);
  }

  findAll(condition: SearchCategoryDto) {
    const where = {};
    SearchConditionUtil.equalId(condition.id, where);
    SearchConditionUtil.equalUserId(condition.userId, where);
    SearchConditionUtil.likeName(condition.name, where);

    return this.category
      .find(where)
      .then((category) => {
        return category;
      })
      .catch((e) => {
        throw e;
      });
  }

  update(updateCategoryDto: UpdateCategoryDto) {
    return this.category
      .update(updateCategoryDto.id, { name: updateCategoryDto.name })
      .catch((e) => {
        throw e;
      });
  }

  delete(id: number) {
    return this.category.delete(id).catch((e) => { throw e; })
  }
}
