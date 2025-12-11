import { IsNotEmpty, IsString, IsInt, IsDateString } from 'class-validator';

export class CreateWorkshopDto {
  @IsString()
  @IsNotEmpty()
  topic: string;

  @IsDateString()
  @IsNotEmpty()
  date: string; 

  @IsInt()
  @IsNotEmpty()
  id_medical: number;

  @IsString()
  @IsNotEmpty()
  location: string;
}

export class CreateWorkshopDtoNonMedical {
  @IsString()
  @IsNotEmpty()
  topic: string;

  @IsDateString()
  @IsNotEmpty()
  date: string; 

  @IsString()
  @IsNotEmpty()
  location: string;
}

