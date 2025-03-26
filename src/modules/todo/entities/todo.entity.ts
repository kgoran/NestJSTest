import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'postgres' })
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number; //todo's primary key

  @Column()
  title: string; //todo's title

  @Column()
  status: string; //todo's status
}
