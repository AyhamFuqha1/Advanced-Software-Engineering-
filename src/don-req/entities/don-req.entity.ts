import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('donation_requests')
export class DonReq {
  @PrimaryGeneratedColumn()
  request_id: number;

  @Column()
  donor_id: number;

  @Column()
  patient_id: number;

  @Column()
  purpose: string;

  @Column('float')
  value: number;

  @Column()
  state: string;
}
