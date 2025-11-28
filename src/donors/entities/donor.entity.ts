import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('donors')   // لازم يكون نفس اسم الجدول فعلياً
export class Donor {
  @PrimaryGeneratedColumn()
  id_donors: number;

  @Column()
  full_name: string;

  @Column('float')
  total_donated: number;
}
