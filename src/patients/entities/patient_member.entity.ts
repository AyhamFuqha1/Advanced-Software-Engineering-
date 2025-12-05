import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('groups_patients')
export class GroupsPatients {

  @Column()
  patient_id: number;

  @Column()
  group_id: number;
}
