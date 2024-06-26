import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Board } from "./board.entity";

@Entity()
export class User{
    @PrimaryGeneratedColumn() //id가 자동으로 증가
    id:number;

    @ApiProperty({description:"유저아이디",example:"admin"})
    @Column({unique: true})
    username: string;

    @ApiProperty({description:"유저비밀번호",example:'1234'})
    @Column({select:false})
    password: string;

    @ApiProperty({ description: '이름' })
    @Column()
    name:string;

    @ApiProperty({description:"작성한 게시글"})
    @OneToMany(()=> Board, (board)=>board.user)
    boards?:Board[];
}