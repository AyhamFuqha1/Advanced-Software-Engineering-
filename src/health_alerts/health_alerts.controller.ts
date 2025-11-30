import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HealthAlertsService } from './health_alerts.service';
import { CreateHealthAlertDto } from './dto/create-health_alert.dto';
import { UpdateHealthAlertDto } from './dto/update-health_alert.dto';

@Controller('health-alerts')
export class HealthAlertsController {
  constructor(private readonly healthAlertsService: HealthAlertsService) {}

  @Post()
  create(@Body() createHealthAlertDto: CreateHealthAlertDto) {
    return this.healthAlertsService.create(createHealthAlertDto);
  }

  @Get()
  findAll() {
    return this.healthAlertsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.healthAlertsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHealthAlertDto: UpdateHealthAlertDto) {
    return this.healthAlertsService.update(+id, updateHealthAlertDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.healthAlertsService.remove(+id);
  }
}
