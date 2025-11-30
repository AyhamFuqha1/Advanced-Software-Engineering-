import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, ValidationPipe, UsePipes } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { CreateHealthGuideDto, CreateHealthGuideDtoNonId } from 'src/health_guides/dto/create-health_guide.dto';

@Controller('doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.doctorService.create(createDoctorDto);
  }

  @Get()
  findAll() {
    return this.doctorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.doctorService.findOne(id);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  update(@Param('id',ParseIntPipe) id: number, @Body() updateDoctorDto: UpdateDoctorDto) {
    return this.doctorService.update(id, updateDoctorDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.doctorService.remove(id);
  }

  @Post(':id/healthguides')
  createHealthGuides(@Param('id')id:number,@Body() createHealthGuideDtoNonId:CreateHealthGuideDtoNonId){
    return this.doctorService.createHealthGuides(id,createHealthGuideDtoNonId);
  }
}
