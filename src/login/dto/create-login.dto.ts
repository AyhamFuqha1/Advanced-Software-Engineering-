import { IsNotEmpty, Length, IsEmail, IsString, IsIn } from 'class-validator';

export class CreateLoginDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(3, 20)
  passward: string;

  @IsNotEmpty()
  @IsIn(['patient', 'doctor','donor','admin'])
  type: 'patient'|'doctor'| 'donor'|'admin';
}

export class LoginDto {
  

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  passward: string;

  
}
