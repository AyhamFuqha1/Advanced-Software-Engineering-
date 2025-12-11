import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('donation')
export class Donation {
  @PrimaryGeneratedColumn({ name: 'id_donation' })
  donation_id: number;

  @Column({ name: 'id_donation_request' })
  donation_request_id: number;

  @Column({ name: 'id_donors' })
  donor_id: number;

  @Column()
  total_donated: number;
}
