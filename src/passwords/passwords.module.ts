import { Module } from '@nestjs/common';
import { PasswordsController } from './passwords.controller';
import { PasswordsService } from './passwords.service';
import { PasswordsRepository } from './passwords.repository';
import { CategoriesModule } from '../categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Password } from '../entities/password.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Password]), CategoriesModule],
  controllers: [PasswordsController],
  providers: [PasswordsService, PasswordsRepository],
})
export class PasswordsModule {}
