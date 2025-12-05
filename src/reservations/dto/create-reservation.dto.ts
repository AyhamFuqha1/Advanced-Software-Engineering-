import { IsNotEmpty } from 'class-validator';

export class CreateReservationDto {
  @IsNotEmpty()
  doctor_id: number;
  @IsNotEmpty()
  patient_id: number;
  @IsNotEmpty()
  date_time: string;
  @IsNotEmpty()
  communication_way: string;
  @IsNotEmpty()
  medical_condition: string;
}

export class CreateReservationDtoNonid {
  @IsNotEmpty()
  doctor_id: number;
  @IsNotEmpty()
  date_time: string;
  @IsNotEmpty()
  communication_way: string;
  @IsNotEmpty()
  medical_condition: string;
}
