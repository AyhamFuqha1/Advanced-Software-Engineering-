import { IsNotEmpty, IsString, IsNumber, IsInt } from 'class-validator';

export class CreateDonReqDto {
  @IsInt()
  @IsNotEmpty()
  donor_id: number;

  @IsInt()
  @IsNotEmpty()
  patient_id: number;

  @IsString()
  @IsNotEmpty()
  purpose: string;

  @IsNumber()
  @IsNotEmpty()
  value: number;

  @IsString()
  @IsNotEmpty()
  state: string;
}
