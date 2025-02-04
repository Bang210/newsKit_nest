import { Module } from '@nestjs/common';
import { KeywordModule } from './keyword/keyword.module';

@Module({
  imports: [KeywordModule],
  providers: [],
})
export class AppModule {}
