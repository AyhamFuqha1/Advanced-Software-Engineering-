import { PartialType } from '@nestjs/mapped-types';
import { CreateRequestingMedicineDto } from './create-requesting_medicine.dto';

export class UpdateRequestingMedicineDto extends PartialType(CreateRequestingMedicineDto) {}
