import { AppService } from './../app.service';
import { ApiTags } from '@nestjs/swagger';
import { BoardService } from './board.service';
import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { createBoardDto } from './dto/create-board.dto';
import { Ip } from 'src/decorators/ip.decorator';

@Controller('board')
@ApiTags('Board')
export class BoardController {
    constructor(
        private readonly boardService: BoardService
    ){}

    // /board
    @Get()
    findAll(){
        return this.boardService.findAll();
    }

    @Get(':id')
    find(
        @Param('id') id: number
    ){
        return this.boardService.find(id);
    }

    @Post()
    create(
        @Body() data:createBoardDto
    ){
        return this.boardService.create(data);
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body(new ValidationPipe()) data:createBoardDto
    ){
        return this.boardService.update(id,data);
    }

    @Delete(':id')
    remove(
        @Param('id') id: number
    ){
        return this.boardService.delete(id);
    }
}
