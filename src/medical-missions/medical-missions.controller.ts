import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicalMissionsService } from './medical-missions.service';
import { CreateMedicalMissionDto } from './dto/create-medical-mission.dto';
import { UpdateMedicalMissionDto } from './dto/update-medical-mission.dto';

@Controller('medical-missions')
export class MedicalMissionsController {
  constructor(private readonly medicalMissionsService: MedicalMissionsService) {}

  @Post()
  create(@Body() createMedicalMissionDto: CreateMedicalMissionDto) {
    return this.medicalMissionsService.create(createMedicalMissionDto);
  }

  @Get()
  findAll() {
    return this.medicalMissionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicalMissionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicalMissionDto: UpdateMedicalMissionDto) {
    return this.medicalMissionsService.update(+id, updateMedicalMissionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalMissionsService.remove(+id);
  }
}
