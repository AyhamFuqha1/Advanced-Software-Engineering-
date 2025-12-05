import { IsNotEmpty } from "class-validator";

export class CreateVolunteerDoctorDto {
    @IsNotEmpty()
  doctor_id: number;

  @IsNotEmpty()
  mission_area: string;

  @IsNotEmpty()
  start_date: string;

  @IsNotEmpty()
  end_date: string;
}
