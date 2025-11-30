import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('donation')  
export class Donation {
  @Column()
  id_donation: number;

  @Column()
  id_donation_request: number | null;

  @Column()
  id_donors: number;

  @Column()
  total_donated: number;
}
