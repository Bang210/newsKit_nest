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

    readonly meaninglessWordSet: Set<string> = new Set([
        "뉴스", "확성기", "뉴스스탠드", "정부", "한국", "오늘", "단독", "공개", "방송", "대응", "명령",
        "논란", "재개", "영역", "집단", "신고", "사건", "경제", "서울", "최고", "중앙", "이번", "추가", "사망", 
        "세계", "상임", "이유", "검토", "위반", "경찰", "효과", "우리", "가능성", "투자", "올해", "불법", "영상", 
        "이상", "국민", "대표", "선출", "의혹", "구성", "전환", "글로벌", "고소", "검찰", "사실", "현장", "혐의", 
        "속보", "연장", "내년", "언론", "판결", "입장", "발표", "직접", "대통령", "충격", "수사", "가족", "향년", 
        "발견", "폭행", "수사", "벌금", "통과", "국회", "선고", "확정", "여사", "조사", "추천", "금융", "회장", 
        "의원", "작년", "사진", "구속", "조카", "부인", "거부", "처리", "책임", "문제", "유죄", "귀국", "여성", 
        "남성", "포토", "살해", "법원", "종합", "해결", "이슈", "중단", "기자", "논의", "구형", "발부", "기자", 
        "행사", "최대", "네이버뉴스", "선정", "사업", "언론사", "저장", "관련", "업체", "옵션", "바로가기", 
        "전체", "문서", "선택", "검색", "댓글", "부문", "내일", "접기", "동영상", "지식", "메인", "레이어", "네이버"
      ]);
      
}
