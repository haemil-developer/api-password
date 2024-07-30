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
import { PasswordsService } from './passwords.service';
import { AddPasswordDto } from './dto/add.password.dto';
import { SearchPasswordDto } from './dto/search.password.dto';
import { UpdatePasswordDto } from './dto/update.password.dto';

@Controller('passwords')
export class PasswordsController {
  constructor(private readonly passwordsService: PasswordsService) {}

  @Post()
  addPassword(@Body() requestBody: AddPasswordDto) {
    return this.passwordsService.add(requestBody);
  }

  @Get()
  getPasswords(@Query() requestQuery: SearchPasswordDto) {
    return this.passwordsService.getPasswords(requestQuery);
  }

  @Get('/:id')
  getPassword(@Param('id') id: number) {
    return this.passwordsService.getPassword(id);
  }

  @Patch('/:id')
  updatePassword(
    @Param('id') id: number,
    @Body() requestBody: UpdatePasswordDto,
  ) {
    return this.passwordsService.update(requestBody);
  }

  @Delete(':/id')
  deletePassword(@Param('id') id: number) {
    return this.deletePassword(id);
  }
}
