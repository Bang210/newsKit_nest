import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeywordService } from './service/keyword.service';
import { KeywordController } from './controller/keyword.controller';
import { Keyword } from './entity/keyword.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Keyword])],
  controllers: [KeywordController],
  providers: [KeywordService],
})
export class KeywordModule {}
