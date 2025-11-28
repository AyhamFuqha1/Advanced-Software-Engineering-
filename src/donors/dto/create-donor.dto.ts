import { IsNotEmpty } from "class-validator";

export class CreateDonorDto {
  @IsNotEmpty()
  full_name: string;
  total_donated: number;
}
