import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateHealthAlertDto {
  @IsNotEmpty()
  medical_id?: number;

  @IsNotEmpty()
  data: string;
}


export class CreateHealthAlertDtoNonMecical {
 
  @IsNotEmpty()
  data: string;
}
