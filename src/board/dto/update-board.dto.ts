import { IsOptional, MaxLength, MinLength } from "class-validator";
import { createBoardDto } from "./create-board.dto";

export class updateBoardDto{
    @MinLength(2)
    @MaxLength(20)
    @IsOptional()
    name?:string;

    @IsOptional()
    content?:string;
}