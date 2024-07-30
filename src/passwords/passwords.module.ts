import { Module } from '@nestjs/common';
import { PasswordsController } from './passwords.controller';
import { PasswordsService } from './passwords.service';
import { PasswordsRepository } from "./passwords.repository";

@Module({
  controllers: [PasswordsController],
  providers: [PasswordsService, PasswordsRepository]
})
export class PasswordsModule {}
