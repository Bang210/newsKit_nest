import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Keyword } from '../entity/keyword.entity';

@Injectable()
export class KeywordService {
  constructor(
    @InjectRepository(Keyword)  // Repository 주입
    private readonly keywordRepository: Repository<Keyword>,  // Repository 타입 주입
  ) {}
}