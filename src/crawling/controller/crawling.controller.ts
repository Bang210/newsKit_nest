import { Controller } from '@nestjs/common';
import { CrawlingService } from '../service/crawling.service';

@Controller('crawling')
export class CrawlingController {
  constructor(private readonly crawlingService: CrawlingService) {}
}
