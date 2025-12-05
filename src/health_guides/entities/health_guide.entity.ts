import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('health_guides') 
export class HealthGuide {
  @PrimaryGeneratedColumn()
  guide_id: number;

  @Column()
  doctor_id: number;

  @Column()
  text: string;
}
