import { IsInt, IsNotEmpty,Length } from "class-validator"
import { Type } from "class-transformer"
export class CreatePatientDto {
    @Length(5, 50)
    full_name:string
    @Type(()=> Number)
    @IsInt()
    age:number
    @IsNotEmpty()
    medical_history:string
}
