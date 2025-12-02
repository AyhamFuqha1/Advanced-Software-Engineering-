import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('health_alerts')
export class HealthAlert {
  @PrimaryGeneratedColumn()
  alert_id: number;

  @Column()
  medical_id: number;

  @Column()
  data: string; 
}
