import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('support_groups')
export class SupportGroup {
  @PrimaryGeneratedColumn()
  group_id: number;

  @Column()
  topic: string;

  @Column()
  description: string;
}
