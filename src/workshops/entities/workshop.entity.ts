import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('workshops')
export class Workshop  {
  @PrimaryGeneratedColumn({ name: 'id_workshop' })
  id_workshop: number;

  @Column()
  topic: string;

  @Column()
  date: Date;

  @Column()
  id_medical: number;

  @Column()
  location: string;
}
