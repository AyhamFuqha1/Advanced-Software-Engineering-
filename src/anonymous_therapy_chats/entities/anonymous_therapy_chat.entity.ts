import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('anonymous_therapy_chats')
export class AnonymousTherapyChat {
  @PrimaryGeneratedColumn()
  chat_id: number;

  @Column()
  state: string;

  @Column()
  doctor_id: number;
}
