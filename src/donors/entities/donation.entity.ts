import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('donation')
export class Donation {
  @PrimaryGeneratedColumn({ name: 'donation_id' })
  donation_id: number;

  @Column({ name: 'donation_request_id' })
  donation_request_id: number;

  @Column({ name: 'donor_id' })
  donor_id: number;

  @Column()
  total_donated: number;
}
