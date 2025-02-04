import { Controller } from '@nestjs/common';
import { KeywordService } from '../service/keyword.service';

@Controller('keyword')
export class KeywordController {
  constructor(private readonly keywordService: KeywordService) {}
}
