import { Injectable } from '@nestjs/common';
import { Todo } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoService {
    constructor(private readonly prismaService: PrismaService) {}

    public async getAll(): Promise<Todo[]> {
        return await this.prismaService.prismaClient.todo.findMany();
    }

    public async create(title: string): Promise<Todo> {
        return await this.prismaService.prismaClient.todo.create({
            data: {
                title,
            },
        });
    }
}
