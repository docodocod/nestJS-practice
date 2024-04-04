import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

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

    @Column()
    name:string;
}