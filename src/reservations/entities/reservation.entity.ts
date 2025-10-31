import { Column, PrimaryGeneratedColumn } from "typeorm"

export class Reservation {
  @PrimaryGeneratedColumn()
  reservation_id:number
   
  @Column()
  doctor_id

  @Column()
  patient_id:number

  @Column()
  date_time:Date;

  @Column()
  communication_way:string


    	
}
