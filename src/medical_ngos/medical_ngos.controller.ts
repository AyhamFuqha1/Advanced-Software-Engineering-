import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
  UseGuards
} from '@nestjs/common';

import { MedicalNgosService } from './medical_ngos.service';
import { CreateMedicalNgoDto } from './dto/create-medical_ngo.dto';
import { UpdateMedicalNgoDto } from './dto/update-medical_ngo.dto';

import { CreateHealthAlertDtoNonMecical } from 'src/health_alerts/dto/create-health_alert.dto';
import { CreateWorkshopDtoNonMedical } from 'src/workshops/dto/create-workshop.dto';

import { AuthGuard } from 'src/guards/auth/auth.guard';
import { RolesGuard } from 'src/guards/auth/roles/roles.guard';
import { Roles } from 'src/decorators/roles/roles.decorator';
import { Role } from 'src/interfaces';

@Controller('medical-ngos')
@UseGuards(AuthGuard, RolesGuard)
export class MedicalNgosController {
  constructor(private readonly medicalNgosService: MedicalNgosService) {}

  @Post()
  @Roles(Role.Admin)
  @UsePipes(ValidationPipe)
  create(@Body() createMedicalNgoDto: CreateMedicalNgoDto) {
    return this.medicalNgosService.create(createMedicalNgoDto);
  }

  @Get()
  @Roles(Role.Admin, Role.Doctor, Role.Patient, Role.Donor)
  findAll() {
    return this.medicalNgosService.findAll();
  }

  @Get(':id')
  @Roles(Role.Admin, Role.Doctor, Role.Patient, Role.Donor)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.medicalNgosService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.Admin)
  @UsePipes(ValidationPipe)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMedicalNgoDto: UpdateMedicalNgoDto,
  ) {
    return this.medicalNgosService.update(id, updateMedicalNgoDto);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.medicalNgosService.remove(id);
  }

  @Post(':id/healthalert')
  @Roles(Role.Admin)
  @UsePipes(ValidationPipe)
  createHealthAlert(
    @Param('id', ParseIntPipe) id: number,
    @Body() createHealthAlertDtoNonMecical: CreateHealthAlertDtoNonMecical,
  ) {
    return this.medicalNgosService.createHealthAlert(
      id,
      createHealthAlertDtoNonMecical,
    );
  }

  @Post(':id/workshops')
  @Roles(Role.Admin)
  @UsePipes(ValidationPipe)
  createWorkShop(
    @Param('id', ParseIntPipe) id: number,
    @Body() createWorkshopDtoNonMedical: CreateWorkshopDtoNonMedical,
  ) {
    return this.medicalNgosService.createWorkShop(
      id,
      createWorkshopDtoNonMedical,
    );
  }
}
