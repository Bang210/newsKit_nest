import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Crawling } from '../entity/crawling.entity'
@Injectable()
export class CrawlingService {

        constructor(
            @InjectRepository(Crawling)  // @InjectRepository로 레포지토리 주입
            private readonly keywordRepository: Repository<Crawling>,  // 주입된 레포지토리 사용
          ) {}

}
