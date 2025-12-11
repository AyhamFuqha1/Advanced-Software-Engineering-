import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateInventorDto {
  @IsNotEmpty()
  item_name: string;
  @IsNotEmpty()
  quantity: number;
  @IsNotEmpty()
  category: string;
  @IsNotEmpty()
  @IsInt()
  medical_id: number; 
}

export class CreateInventor_nonid {
  @IsNotEmpty()
  item_name: string;
  @IsNotEmpty()
  @IsInt()
  quantity: number;
  @IsNotEmpty()
  category: string;
}