//src/todo/dto/update-dto.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';

/**
 * @param {string} target  The target to process
 * @returns The processed target number
 */
export class UpdateTodoDto extends PartialType(CreateTodoDto) {}
