import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ParseIntPipe } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { ValidationPipe} from '@nestjs/common';
import { CreateRequestingMedicineNonIdDto } from 'src/requesting_medicine/dto/create-requesting_medicine.dto';
@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientsService.create(createPatientDto);
  }

  @Get()
  findAll() {
    return this.patientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.patientsService.findOne(id);
  }

  @Patch(':id')
   @UsePipes(ValidationPipe)
  update(@Param('id',ParseIntPipe) id: number, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientsService.update(id, updatePatientDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.patientsService.remove(id);
  }

  @Post(':id/requestMedicine')
  createRequsetMedicine(@Param('id')id:number,@Body() createRequestingMedicineNonIdDto:CreateRequestingMedicineNonIdDto){
     return this.patientsService.createRequsetMedicine(id,createRequestingMedicineNonIdDto);
  }
}