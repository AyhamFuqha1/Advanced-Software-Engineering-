import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMedicalNgoDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  contact: string;
}
