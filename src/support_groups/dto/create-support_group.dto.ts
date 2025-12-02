import { IsNotEmpty } from "class-validator";

export class CreateSupportGroupDto {
  @IsNotEmpty()
  topic: string;

  @IsNotEmpty()
  description: string;
}
