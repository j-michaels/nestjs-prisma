import { Body, Controller, Get, Post } from '@nestjs/common';
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
    async create(@Body() createTodoDTO: CreateTodoDTO) {
        return this.todoService.create(createTodoDTO.title);
    }
}
