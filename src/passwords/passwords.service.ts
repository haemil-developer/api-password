import { Injectable, NotFoundException } from '@nestjs/common';
import { AddPasswordDto } from './dto/add.password.dto';
import { CategoriesService } from '../categories/categories.service';
import { SearchCategoryDto } from '../categories/dto/search.category.dto';
import { ArrayUtil } from '../utils/array.util';
import { PasswordsRepository } from './passwords.repository';
import { SearchPasswordDto } from './dto/search.password.dto';
import { UpdatePasswordDto } from './dto/update.password.dto';

@Injectable()
export class PasswordsService {
  constructor(
    private passwordsRepository: PasswordsRepository,
    private categoriesService: CategoriesService,
  ) {}

  async add(addPasswordDto: AddPasswordDto) {
    const condition = new SearchCategoryDto();
    condition.id = addPasswordDto.categoryId;
    const categories = await this.categoriesService.getCategories(condition);
    if (ArrayUtil.isEmptyArray(categories)) {
      throw new NotFoundException();
    }

    return await this.passwordsRepository.save(addPasswordDto);
  }

  getPassword(id: number) {
    return this.passwordsRepository.findOneByPk(id);
  }

  getPasswords(searchPasswordDto: SearchPasswordDto) {
    return this.passwordsRepository.findAll(searchPasswordDto);
  }

  async update(updatePasswordDto: UpdatePasswordDto) {
    return this.passwordsRepository.update(updatePasswordDto);
  }
}
