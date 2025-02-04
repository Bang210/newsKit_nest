import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn} from 'typeorm';

@Entity()
export class Keyword {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    crawlingId: number;

    @Column({ type: 'simple-array' })
    keywordList: string[];

    @CreateDateColumn()
    createdTime: Date;
}