import { IsNotEmpty, IsString, IsOptional, IsInt } from 'class-validator';

export class CreateRequestingMedicineDto {
  @IsNotEmpty()
  @IsInt()
  id_NGOs: number;

  @IsNotEmpty()
  @IsInt()
  id_patient: number;

  @IsNotEmpty()
  @IsString()
  name_medicine: string;
}

export class CreateRequestingMedicineNonIdDto {
  @IsNotEmpty()
  @IsInt()
  id_NGOs: number;

  @IsNotEmpty()
  @IsString()
  name_medicine: string;
}

