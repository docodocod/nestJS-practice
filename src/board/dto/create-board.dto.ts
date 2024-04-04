import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class createBoardDto{
    
    @MinLength(2)
    @MaxLength(20)
    @ApiProperty({
        description:"이름",
        required:true,
        example:"홍길동",
    })
    name:string;

    @ApiProperty({
        description:"내용",
        required:true,
        example:"안녕하세요"
    })
    content:string;
}