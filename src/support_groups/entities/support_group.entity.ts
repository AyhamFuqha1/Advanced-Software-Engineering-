import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SupportGroup {
  @PrimaryGeneratedColumn()
  group_id: number;

  @Column()
  topic: string;

  @Column()
  description: string;
}
