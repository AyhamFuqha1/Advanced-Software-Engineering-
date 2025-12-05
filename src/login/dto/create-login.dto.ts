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
  @IsIn(['admin', 'user'])
  type: 'admin' | 'user';
}

export class LoginDto {
  

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  passward: string;

  
}
