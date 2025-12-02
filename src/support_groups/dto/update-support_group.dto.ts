import { PartialType } from '@nestjs/mapped-types';
import { CreateSupportGroupDto } from './create-support_group.dto';

export class UpdateSupportGroupDto extends PartialType(CreateSupportGroupDto) {}
