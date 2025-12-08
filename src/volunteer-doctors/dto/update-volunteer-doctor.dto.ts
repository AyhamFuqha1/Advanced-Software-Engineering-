import { PartialType } from '@nestjs/mapped-types';
import { CreateVolunteerDoctorDto } from './create-volunteer-doctor.dto';

export class UpdateVolunteerDoctorDto extends PartialType(CreateVolunteerDoctorDto) {}
