import { BoardService } from './board.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('board')
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
        @Body() data
    ){
        return this.boardService.create(data);
    }

    @Put()
    update(
        @Body() data
    ){
        return 
    }

    @Delete()
    remove(
        @Param('id') id: number
    ){
        return 'delete';
    }
}