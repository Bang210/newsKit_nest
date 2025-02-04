import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Crawling } from '../entity/crawling.entity';

@Injectable()
export class KeywordService {
  constructor(
    @InjectRepository(Crawling)  // Repository 주입
    private readonly keywordRepository: Repository<Crawling>,  // Repository 타입 주입
  ) {}
}