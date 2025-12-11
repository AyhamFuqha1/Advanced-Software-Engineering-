import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('workshops')
export class Workshop  {
  @PrimaryGeneratedColumn({ name: 'workshop_id' })
  id_workshop: number;

  @Column({ name: 'topic' })
  topic: string;

  @Column({ name: 'date' })
  date: Date;

  @Column({ name: 'medical_id' })
  id_medical: number;

  @Column({ name: 'location' })
  location: string;
}
