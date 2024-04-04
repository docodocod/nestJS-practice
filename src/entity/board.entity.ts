import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Board{
    @PrimaryGeneratedColumn({name:'id'})
    id: number;

    @ApiProperty({description:"user_id"})
    @Column()
    userId:number;

    @ApiProperty({description:"내용"})
    @Column()
    content: string;

    @ApiProperty({description:"수정일"})
    @UpdateDateColumn()
    createdAt:Date;

    @ApiProperty({description:"생성일"})
    @CreateDateColumn()
    updatedAt:Date;
}