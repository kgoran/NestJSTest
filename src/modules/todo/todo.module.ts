//src/todo/todo.module.ts
import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { PostgresModule } from '../../modules/databases/postgres.module';

@Module({
  imports: [PostgresModule, TypeOrmModule.forFeature([Todo])], // importing typeOrm
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
