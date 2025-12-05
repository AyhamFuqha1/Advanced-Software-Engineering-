import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VolunteerDoctorsService } from './volunteer-doctors.service';
import { CreateVolunteerDoctorDto } from './dto/create-volunteer-doctor.dto';
import { UpdateVolunteerDoctorDto } from './dto/update-volunteer-doctor.dto';

@Controller('volunteer-doctors')
export class VolunteerDoctorsController {
  constructor(private readonly volunteerDoctorsService: VolunteerDoctorsService) {}

  @Post()
  create(@Body() createVolunteerDoctorDto: CreateVolunteerDoctorDto) {
    return this.volunteerDoctorsService.create(createVolunteerDoctorDto);
  }

  @Get()
  findAll() {
    return this.volunteerDoctorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.volunteerDoctorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVolunteerDoctorDto: UpdateVolunteerDoctorDto) {
    return this.volunteerDoctorsService.update(+id, updateVolunteerDoctorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.volunteerDoctorsService.remove(+id);
  }
}
