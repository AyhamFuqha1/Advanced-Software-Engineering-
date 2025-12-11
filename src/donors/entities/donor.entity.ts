import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('donors')
export class Donor {
  @PrimaryGeneratedColumn({ name: 'donor_id' })
  donor_id: number;

  @Column({ name: 'full_name' })
  full_name: string;

  @Column({ name: 'last_donated', type: 'float' })
  last_donated: number;
}
