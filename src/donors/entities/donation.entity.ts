import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('donation')  
export class Donation {
  @PrimaryGeneratedColumn()
  id_donation: number;

  @Column()
  id_donation_request: number ;

  @Column()
  id_donors: number;

  @Column()
  total_donated: number;
}
