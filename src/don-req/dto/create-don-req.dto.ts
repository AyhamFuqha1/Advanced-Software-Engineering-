import { IsNotEmpty, IsString, IsNumber, IsInt } from 'class-validator';

export class CreateDonReqDto {
  @IsInt()
  @IsNotEmpty()
  id_doners: number;

  @IsInt()
  @IsNotEmpty()
  id_patient: number;

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
