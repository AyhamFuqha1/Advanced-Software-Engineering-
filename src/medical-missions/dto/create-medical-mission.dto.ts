import { IsNotEmpty } from 'class-validator';

export class CreateMedicalMissionDto {
  @IsNotEmpty()
  patient_id: number;

  @IsNotEmpty()
  volunteer_id: number;

  @IsNotEmpty()
  date: string;
}
