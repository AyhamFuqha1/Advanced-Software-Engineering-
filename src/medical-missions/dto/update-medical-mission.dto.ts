import { PartialType } from '@nestjs/mapped-types';
import { CreateMedicalMissionDto } from './create-medical-mission.dto';

export class UpdateMedicalMissionDto extends PartialType(CreateMedicalMissionDto) {}
