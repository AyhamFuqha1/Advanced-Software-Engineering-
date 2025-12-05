import { isNotEmpty, IsNotEmpty } from 'class-validator';

export class CreateDonationDto {
  @IsNotEmpty()
  id_donation_request: number | null;

  @IsNotEmpty()
  id_donors: number;

  @IsNotEmpty()
  total_donated: number;
}

export class CreateDonationDtoNonDoners {
  @IsNotEmpty()
  id_donation_request: number | null;

 
  @IsNotEmpty()
  total_donated: number;
}

