import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeywordService } from './service/keyword.service';
import { KeywordController } from './controller/keyword.controller';
import { Keyword } from './entity/keyword.entity';
import { ChildKeyword } from './entity/childKeyword.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Keyword, ChildKeyword])],
  controllers: [KeywordController],
  providers: [KeywordService],
})
export class KeywordModule {}
