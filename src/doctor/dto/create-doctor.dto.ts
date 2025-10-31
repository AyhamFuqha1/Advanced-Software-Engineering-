import { IsNotEmpty, Length } from "class-validator"

export class CreateDoctorDto {
   @Length(3,20) 
   full_name:string
   @IsNotEmpty()
   specialization:string
   @IsNotEmpty()
   contact_email:string
   evaluation_status:string
}
