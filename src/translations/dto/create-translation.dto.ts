import { IsNotEmpty } from "class-validator";

export class CreateTranslationDto {
    @IsNotEmpty()
    reservation_id:number
    @IsNotEmpty()
    translated_text:string
    @IsNotEmpty()
    language:string
}
