import { Module } from '@nestjs/common';
import { CrawlingService } from './service/crawling.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrawlingController } from './controller/crawling.controller';
import { Crawling } from './entity/crawling.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Crawling])],
  controllers: [CrawlingController],
  providers: [CrawlingService],
})
export class CrawlingModule {}
