import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('donation_requests')
export class DonReq {
  @PrimaryGeneratedColumn()
  request_id: number;

  @Column({name:'donor_id'})
  donor_id: number;

  @Column({name:'patient_id'})
  patient_id: number;

  @Column()
  purpose: string;

  @Column('float')
  value: number;

  @Column()
  state: string;
}
