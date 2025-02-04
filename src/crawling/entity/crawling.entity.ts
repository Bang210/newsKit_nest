import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn} from 'typeorm';

@Entity()
export class Crawling {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true})
    keyword: string;

    @Column({ type: 'mediumtext'})
    rawData: string;

    @CreateDateColumn()
    createdTime: Date;
}