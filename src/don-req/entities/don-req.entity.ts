import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('donation_request') 
export class DonReq {
  @PrimaryGeneratedColumn()
  id_request: number;

  @Column()
  id_doners: number;

  @Column()
  id_patient: number;

  @Column()
  purpose: string;

  @Column('float')
  value: number;

  @Column()
  state: string;
}
