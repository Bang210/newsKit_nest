import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn} from 'typeorm';

@Entity()
export class ChildKeyword {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    parentKeyword: string;

    @Column({ type: 'simple-array' })
    childKeywordList: string[];

    @CreateDateColumn()
    createdTime: Date;
}