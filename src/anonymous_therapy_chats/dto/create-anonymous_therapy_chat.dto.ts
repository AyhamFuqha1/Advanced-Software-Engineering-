import { IsNotEmpty } from 'class-validator';

export class CreateAnonymousTherapyChatDto {
  @IsNotEmpty()
  state: string;

  @IsNotEmpty()
  doctor_id: number;
}
