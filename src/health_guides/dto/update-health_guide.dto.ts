import { PartialType } from '@nestjs/mapped-types';
import { CreateHealthGuideDto } from './create-health_guide.dto';

export class UpdateHealthGuideDto extends PartialType(CreateHealthGuideDto) {}
