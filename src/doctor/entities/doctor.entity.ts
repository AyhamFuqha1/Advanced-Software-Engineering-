
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('doctors') 
export class Doctor {
  @PrimaryGeneratedColumn()
  doctor_id: number;

  @Column()
  full_name:string

  @Column()
  specialization: string;

  @Column()
  contact_email: string;

  @Column()
  evaluation_status:string

 
}
