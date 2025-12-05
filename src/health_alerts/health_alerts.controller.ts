 import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { HealthAlertsService } from './health_alerts.service';
import { CreateHealthAlertDto } from './dto/create-health_alert.dto';
import { UpdateHealthAlertDto } from './dto/update-health_alert.dto';

@Controller('health-alerts')
export class HealthAlertsController {
  constructor(private readonly healthAlertsService: HealthAlertsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createHealthAlertDto: CreateHealthAlertDto) {
    return this.healthAlertsService.create(createHealthAlertDto);
  }

  @Get()
  findAll() {
    return this.healthAlertsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.healthAlertsService.findOne(+id);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  update(@Param('id',ParseIntPipe) id: number, @Body() updateHealthAlertDto: UpdateHealthAlertDto) {
    return this.healthAlertsService.update(id, updateHealthAlertDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.healthAlertsService.remove(id);
  }
}
