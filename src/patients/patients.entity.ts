import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('patients') 
export class Patients {
  @PrimaryGeneratedColumn()
  patient_id: number;

  @Column()
  full_name: string;

  @Column()
  age: number;

  @Column()
  medical_history: string;

 
}
