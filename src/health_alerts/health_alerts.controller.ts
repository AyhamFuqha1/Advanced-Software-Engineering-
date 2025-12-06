import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  UsePipes, 
  ValidationPipe, 
  ParseIntPipe,
  UseGuards
} from '@nestjs/common';

import { HealthAlertsService } from './health_alerts.service';
import { CreateHealthAlertDto } from './dto/create-health_alert.dto';
import { UpdateHealthAlertDto } from './dto/update-health_alert.dto';

import { AuthGuard } from 'src/guards/auth/auth.guard';
import { RolesGuard } from 'src/guards/auth/roles/roles.guard';
import { Roles } from 'src/decorators/roles/roles.decorator';
import { Role } from 'src/interfaces';

@Controller('health-alerts')
@UseGuards(AuthGuard, RolesGuard)
export class HealthAlertsController {
  constructor(private readonly healthAlertsService: HealthAlertsService) {}

  @Post()
  @Roles(Role.Admin)
  @UsePipes(ValidationPipe)
  create(@Body() createHealthAlertDto: CreateHealthAlertDto) {
    return this.healthAlertsService.create(createHealthAlertDto);
  }

  @Get()
  @Roles(Role.Admin, Role.Doctor, Role.Patient, Role.Donor)
  findAll() {
    return this.healthAlertsService.findAll();
  }

  @Get(':id')
  @Roles(Role.Admin, Role.Doctor, Role.Patient, Role.Donor)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.healthAlertsService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.Admin)
  @UsePipes(ValidationPipe)
  update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateHealthAlertDto: UpdateHealthAlertDto
  ) {
    return this.healthAlertsService.update(id, updateHealthAlertDto);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.healthAlertsService.remove(id);
  }
}
