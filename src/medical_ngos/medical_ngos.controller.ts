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
} from '@nestjs/common';
import { MedicalNgosService } from './medical_ngos.service';
import { CreateMedicalNgoDto } from './dto/create-medical_ngo.dto';
import { UpdateMedicalNgoDto } from './dto/update-medical_ngo.dto';
import { CreateHealthAlertDtoNonMecical } from 'src/health_alerts/dto/create-health_alert.dto';
import { CreateWorkshopDtoNonMedical } from 'src/workshops/dto/create-workshop.dto';

@Controller('medical-ngos')
export class MedicalNgosController {
  constructor(private readonly medicalNgosService: MedicalNgosService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createMedicalNgoDto: CreateMedicalNgoDto) {
    return this.medicalNgosService.create(createMedicalNgoDto);
  }

  @Get()
  findAll() {
    return this.medicalNgosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.medicalNgosService.findOne(+id);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMedicalNgoDto: UpdateMedicalNgoDto,
  ) {
    return this.medicalNgosService.update(id, updateMedicalNgoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.medicalNgosService.remove(id);
  }

  @Post(':id/healthalert')
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
