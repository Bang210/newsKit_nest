import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeywordModule } from './keyword/keyword.module';
import { Keyword } from './keyword/entity/keyword.entity';
import { CrawlingModule } from './crawling/crawling.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',             // MySQL 사용
      host: 'localhost',         // MySQL 서버 주소
      port: 3306,                // MySQL 기본 포트
      username: 'root',          // MySQL 사용자명
      password: '1234',          // MySQL 비밀번호
      database: 'test_db',       // 데이터베이스 이름
      entities: [Keyword],       // 엔티티들 등록
      synchronize: true,         // 개발 환경에서는 true, 프로덕션 환경에서는 false로 설정
      logging: true,             // 쿼리 로깅 활성화
    }),
    KeywordModule,
    CrawlingModule
  ],
  providers: [],
})
export class AppModule {}
