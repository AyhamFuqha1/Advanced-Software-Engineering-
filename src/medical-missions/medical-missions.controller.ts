import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  ValidationPipe,
  UsePipes,
  UseGuards
} from '@nestjs/common';

import { MedicalMissionsService } from './medical-missions.service';
import { CreateMedicalMissionDto } from './dto/create-medical-mission.dto';
import { UpdateMedicalMissionDto } from './dto/update-medical-mission.dto';

import { AuthGuard } from 'src/guards/auth/auth.guard';
import { RolesGuard } from 'src/guards/auth/roles/roles.guard';
import { Roles } from 'src/decorators/roles/roles.decorator';
import { Role } from 'src/interfaces';

@Controller('medical-missions')
@UseGuards(AuthGuard, RolesGuard)
export class MedicalMissionsController {
  constructor(
    private readonly medicalMissionsService: MedicalMissionsService,
  ) {}

  @Post()
  @Roles(Role.Admin)
  @UsePipes(ValidationPipe)
  create(@Body() createMedicalMissionDto: CreateMedicalMissionDto) {
    return this.medicalMissionsService.create(createMedicalMissionDto);
  }

  @Get()
  @Roles(Role.Admin, Role.Doctor, Role.Patient, Role.Donor)
  findAll() {
    return this.medicalMissionsService.findAll();
  }

  @Get(':id')
  @Roles(Role.Admin, Role.Doctor, Role.Patient, Role.Donor)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.medicalMissionsService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.Admin)
  @UsePipes(ValidationPipe)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMedicalMissionDto: UpdateMedicalMissionDto,
  ) {
    return this.medicalMissionsService.update(id, updateMedicalMissionDto);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.medicalMissionsService.remove(id);
  }
}
