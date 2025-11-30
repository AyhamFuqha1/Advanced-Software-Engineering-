import { Entity, Column } from 'typeorm';

@Entity('requesting_medicine')
export class RequestingMedicine {
  @Column()
  id_requesting_medicine: number;

  @Column()
  id_NGOs: number;

  @Column()
  id_patient: number;

  @Column()
  name_medicine: string;
}
