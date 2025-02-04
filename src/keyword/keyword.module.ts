import { Module } from '@nestjs/common';
import { KeywordService } from './service/keyword.service';
import { KeywordController } from './controller/keyword.controller';

@Module({
  controllers: [KeywordController],
  providers: [KeywordService],
})
export class KeywordModule {}
