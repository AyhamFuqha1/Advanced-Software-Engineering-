import { Column, PrimaryGeneratedColumn,Entity } from "typeorm"
@Entity('reservations') 
export class Reservation {
  @PrimaryGeneratedColumn()
  reservation_id:number
   
  @Column()
  doctor_id:number

  @Column()
  patient_id:number

  @Column()
  date_time:Date;

  @Column()
  communication_way:string 
  
  @Column()
  medical_condition:string

    	
}
