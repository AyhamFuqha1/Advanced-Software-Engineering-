import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateGroupsdoctorDto {
  @IsInt()
  @IsNotEmpty()
  doctor_id: number;

  @IsInt()
  @IsNotEmpty()
  group_id: number;
}
