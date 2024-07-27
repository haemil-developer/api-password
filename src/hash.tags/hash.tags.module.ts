import { Module } from '@nestjs/common';
import { HashTagsService } from './hash.tags.service';

@Module({
  providers: [HashTagsService]
})
export class HashTagsModule {}
