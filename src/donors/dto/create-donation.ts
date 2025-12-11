import { IsNotEmpty, IsInt, IsNumber } from 'class-validator';

export class CreateDonationDto {
  @IsNotEmpty()
  donation_request_id: number;

  @IsNotEmpty()
  donor_id: number;

  @IsNotEmpty()
  total_donated: number;
}


export class CreateDonationDtoNonDoners {
  @IsNotEmpty()
  id_donation_request: number | null;

 
  @IsNotEmpty()
  total_donated: number;
}

