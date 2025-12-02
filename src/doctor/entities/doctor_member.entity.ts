import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('group_doctor')
export class GroupDoctor{
 
  @Column()
  doctor_id: number;

  @Column()
  group_id: number;
}
