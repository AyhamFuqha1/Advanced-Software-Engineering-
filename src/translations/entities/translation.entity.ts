import { Column, PrimaryGeneratedColumn,Entity } from "typeorm"
@Entity('translations') 
export class Translation  {
  @PrimaryGeneratedColumn()
  translation_id:number
   
  @Column()
  reservation_id:number

  @Column()
  translated_text:string

  @Column()
  language:string;
        
}
