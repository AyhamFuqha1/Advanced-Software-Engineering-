import { PartialType } from '@nestjs/mapped-types';
import { CreateMedicalNgoDto } from './create-medical_ngo.dto';

export class UpdateMedicalNgoDto extends PartialType(CreateMedicalNgoDto) {}
