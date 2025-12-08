import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('medical_missions')
export class MedicalMission {
  @PrimaryGeneratedColumn()
  mission_id: number;

  @Column()
  patient_id: number;

  @Column()
  volunteer_id: number;

  @Column()
  date: string;  
}
