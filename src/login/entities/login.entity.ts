
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('roles')
export class Login {
 @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name:string;

  @Column()
  email:string;

  @Column()
  passward:string;

  @Column()
  type:'admin'|'user';


}
