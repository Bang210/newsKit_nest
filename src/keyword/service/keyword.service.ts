import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Keyword } from '../entity/keyword.entity'

@Injectable()
export class KeywordService {

    constructor(
        @InjectRepository(Keyword)  // @InjectRepository로 레포지토리 주입
        private readonly keywordRepository: Repository<Keyword>,  // 주입된 레포지토리 사용
      ) {}
}
