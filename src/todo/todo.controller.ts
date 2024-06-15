import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDTO } from './dto/create-todo.dto';

@Controller('todos')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Get()
    public getAll() {
        return this.todoService.getAll();
    }

    @Post()
    public async create(@Body() createTodoDTO: CreateTodoDTO) {
        return this.todoService.create(createTodoDTO.title);
    }

    @Get()
    public async delete(@Param('id') id: number) {
        return this.todoService.delete(id);
    }
}
