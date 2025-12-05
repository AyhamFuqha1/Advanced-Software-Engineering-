import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateGroupsPatientsDto {
  @IsInt()
  @IsNotEmpty()
  patient_id: number;

  @IsInt()
  @IsNotEmpty()
  group_id: number;
}
