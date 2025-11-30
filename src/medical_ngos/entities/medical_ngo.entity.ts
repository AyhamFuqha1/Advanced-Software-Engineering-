import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('medical_ngos') 
export class MedicalNgo {
  @PrimaryGeneratedColumn()
  medical_id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  contact: string;
}
