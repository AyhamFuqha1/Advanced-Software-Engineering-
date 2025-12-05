import { PartialType } from '@nestjs/mapped-types';
import { CreateHealthAlertDto } from './create-health_alert.dto';

export class UpdateHealthAlertDto extends PartialType(CreateHealthAlertDto) {}
