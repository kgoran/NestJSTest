import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * @example
 * This is a good example
 * processTarget('yo')
 *
 * @param {string} target  The target to process see {@link Todo}
 * @returns The processed target number
 */
@Entity({ database: 'postgres' })
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number; //todo's primary key

  @Column()
  title: string; //todo's title

  @Column()
  status: string; //todo's status
}
