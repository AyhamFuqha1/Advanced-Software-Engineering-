import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { VolunteerDoctorsService } from './volunteer-doctors.service';
import { CreateVolunteerDoctorDto } from './dto/create-volunteer-doctor.dto';
import { UpdateVolunteerDoctorDto } from './dto/update-volunteer-doctor.dto';

import { AuthGuard } from 'src/guards/auth/auth.guard';
import { RolesGuard } from 'src/guards/auth/roles/roles.guard';
import { Roles } from 'src/decorators/roles/roles.decorator';
import { Role } from 'src/interfaces';

@Controller('volunteer-doctors')
@UseGuards(AuthGuard, RolesGuard)
export class VolunteerDoctorsController {
  constructor(
    private readonly volunteerDoctorsService: VolunteerDoctorsService,
  ) {}

  @Post()
  @Roles(Role.Admin)
  @UsePipes(ValidationPipe)
  create(
    @Body() createVolunteerDoctorDto: CreateVolunteerDoctorDto,
  ) {
    return this.volunteerDoctorsService.create(createVolunteerDoctorDto);
  }

  @Get()
  @Roles(Role.Admin)
  findAll() {
    return this.volunteerDoctorsService.findAll();
  }

  @Get(':id')
  @Roles(Role.Admin)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.volunteerDoctorsService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.Admin)
  @UsePipes(ValidationPipe)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateVolunteerDoctorDto: UpdateVolunteerDoctorDto,
  ) {
    return this.volunteerDoctorsService.update(id, updateVolunteerDoctorDto);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.volunteerDoctorsService.remove(id);
  }
}
