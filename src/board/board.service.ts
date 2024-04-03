import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class BoardService {

    private boards=[
        {
            name: 'kim dongan 1',
            content:'conetent 1',
            id:1,
        },
        {
            name: 'kim dongan 2',
            content:'conetent 2',
            id:2,
        },
        {
            name: 'kim dongan 3',
            content:'conetent 3',
            id:3,
        },
        {
            name: 'kim dongan 4',
            content:'conetent 4',
            id:4,
        },
        {
            name: 'kim dongan 5',
            content:'conetent 5',
            id:5,
        },
        {
            name: 'kim dongan 6',
            content:'conetent 6',
            id:6,
        }
    ];

    findAll(){
        return this.boards;
    }
    find(id:number){
        const index=this.boards.findIndex(board=>board.id==id)
        return this.boards[index]
    }

    getBoardId(id:number){
        return this.boards.findIndex(board=>board.id == id)
    }

    update(id:number, data){
        const index=this.getBoardId(id);
        if( index>-1){
            this.boards[index]={
                ...this.boards[index],
                ...data,
            };
            return this.boards[index];
        }
        return null;
    }

    create(data){
        const newBoard={id: this.getNextId() , ...data}
        this.boards.push(newBoard);
        return newBoard;
    }

    delete(id:number){
        
    }

    getNextId(){
        return this.boards.sort((a,b)=>(b.id-a.id))[0].id+1;
    }
}
