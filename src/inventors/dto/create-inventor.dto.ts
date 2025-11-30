import { IsNotEmpty } from 'class-validator';

export class CreateInventorDto {
  @IsNotEmpty()
  item_name: string;
  @IsNotEmpty()
  quantity: number;
  @IsNotEmpty()
  category: string;
  @IsNotEmpty()
  id_doners: number;
}

export class CreateInventor_nonid {
  @IsNotEmpty()
  item_name: string;
  @IsNotEmpty()
  quantity: number;
  @IsNotEmpty()
  category: string;
}