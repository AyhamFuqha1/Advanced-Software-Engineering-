
export class CreateInventorDto {}
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('inventor')
export class Inventor {

   @PrimaryGeneratedColumn({ name: 'item_id' })
  item_id: number;

  @Column({ name: 'medical_id' })
  medical_id: number;

  @Column({ name: 'item_name' })
  item_name: string;

  @Column()
  quantity: number;

  @Column()
  category: string;
}
