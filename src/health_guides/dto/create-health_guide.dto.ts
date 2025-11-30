import { IsNotEmpty, IsInt, IsString } from 'class-validator';

export class CreateHealthGuideDto {
  @IsInt()
  @IsNotEmpty()
  doctor_id: number;

  @IsString()
  @IsNotEmpty()
  text: string;
}

export class CreateHealthGuideDtoNonId {

  @IsString()
  @IsNotEmpty()
  text: string;
}
