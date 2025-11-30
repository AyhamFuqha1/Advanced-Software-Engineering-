
export class CreateInventorDto {}
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Inventory {

  @PrimaryGeneratedColumn()
  id_item: number;

  @Column()
  item_name: string;

  @Column()
  quantity: number;

  @Column()
  category: string;

  @Column()
  id_doners: number;  
}
