import { Module } from '@nestjs/common';
import { PasswordsModule } from './passwords/passwords.module';
import { CategoriesModule } from './categories/categories.module';
import { HashTagsModule } from './hash.tags/hash.tags.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnsModule } from './sns/sns.module';
import { Category } from './entities/category.entity';
import { Password } from './entities/password.entity';
import { HashTag } from './entities/hash.tag.entity';
import { PasswordHashTag } from './entities/password.hash.tag.entity';
import { PasswordMaster } from './entities/password.master.entity';
import { PasswordSns } from './entities/password.sns.entity';
import { Sns } from './entities/sns.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_password',
      entities: [
        Category,
        Password,
        HashTag,
        PasswordHashTag,
        PasswordMaster,
        PasswordSns,
        Sns,
      ],
      logging: true,
      synchronize: false,
    }),
    PasswordsModule,
    CategoriesModule,
    HashTagsModule,
    SnsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
