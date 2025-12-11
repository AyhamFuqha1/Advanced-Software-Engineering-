import { PartialType } from '@nestjs/mapped-types';
import { CreateDonReqDto } from './create-don-req.dto';

export class UpdateDonReqDto extends PartialType(CreateDonReqDto) {}
