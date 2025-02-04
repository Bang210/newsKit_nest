import { Module } from '@nestjs/common';
import { KeywordController } from './keyword/controller/keyword.controller';

@Module({
  imports: [],
  controllers: [KeywordController],
  providers: [],
})
export class AppModule {}
