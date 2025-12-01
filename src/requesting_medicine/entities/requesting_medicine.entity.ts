import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('requesting_medicine')
export class RequestingMedicine {
  @PrimaryGeneratedColumn()
  id_requesting_medicine: number;

  @Column()
  id_NGOs: number;

  @Column()
  id_patient: number;

  @Column()
  name_medicine: string;
}
