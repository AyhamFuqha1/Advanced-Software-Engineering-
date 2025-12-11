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
  UseGuards,
} from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { CreateHealthGuideDtoNonId } from 'src/health_guides/dto/create-health_guide.dto';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { RolesGuard } from 'src/guards/auth/roles/roles.guard';
import { Roles } from 'src/decorators/roles/roles.decorator';
import { Role } from 'src/interfaces';

@Controller('doctor')
@UseGuards(AuthGuard, RolesGuard)
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Post()
  @Roles(Role.Admin)
  @UsePipes(ValidationPipe)
  create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.doctorService.create(createDoctorDto);
  }

  @Get()
  @Roles(Role.Admin)
  findAll() {
    return this.doctorService.findAll();
  }

  @Get(':id')
  @Roles(Role.Admin, Role.Doctor)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.doctorService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.Admin, Role.Doctor)
  @UsePipes(ValidationPipe)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDoctorDto: UpdateDoctorDto,
  ) {
    return this.doctorService.update(id, updateDoctorDto);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.doctorService.remove(id);
  }

  @Post(':id/healthguides')
  @Roles(Role.Doctor)
  @UsePipes(ValidationPipe)
  createHealthGuides(
    @Param('id', ParseIntPipe) id: number,
    @Body() createHealthGuideDtoNonId: CreateHealthGuideDtoNonId,
  ) {
    return this.doctorService.createHealthGuides(id, createHealthGuideDtoNonId);
  }

  @Post(':id/group/:id_group')
  @Roles(Role.Admin)
  addToGroup(
    @Param('id', ParseIntPipe) id: number,
    @Param('id_group', ParseIntPipe) id_group: number,
  ) {
  return this.doctorService.addToGroup(id, id_group);
  }

}
