import { Module } from '@nestjs/common';
import { PasswordsModule } from './passwords/passwords.module';
import { CategoriesModule } from './categories/categories.module';
import { HashTagsModule } from './hash.tags/hash.tags.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnsModule } from './sns/sns.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_password',
      entities: [],
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
