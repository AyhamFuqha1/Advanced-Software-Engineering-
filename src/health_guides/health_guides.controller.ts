import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HealthGuidesService } from './health_guides.service';
import { CreateHealthGuideDto } from './dto/create-health_guide.dto';
import { UpdateHealthGuideDto } from './dto/update-health_guide.dto';

@Controller('health-guides')
export class HealthGuidesController {
  constructor(private readonly healthGuidesService: HealthGuidesService) {}

  @Post()
  create(@Body() createHealthGuideDto: CreateHealthGuideDto) {
    return this.healthGuidesService.create(createHealthGuideDto);
  }

  @Get()
  findAll() {
    return this.healthGuidesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.healthGuidesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHealthGuideDto: UpdateHealthGuideDto) {
    return this.healthGuidesService.update(+id, updateHealthGuideDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.healthGuidesService.remove(+id);
  }
}
