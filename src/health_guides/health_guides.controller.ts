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
  ParseIntPipe 
} from '@nestjs/common';

import { HealthGuidesService } from './health_guides.service';
import { CreateHealthGuideDto } from './dto/create-health_guide.dto';
import { UpdateHealthGuideDto } from './dto/update-health_guide.dto';

import { AuthGuard } from 'src/guards/auth/auth.guard';
import { RolesGuard } from 'src/guards/auth/roles/roles.guard';
import { Roles } from 'src/decorators/roles/roles.decorator';
import { Role } from 'src/interfaces';

@Controller('health-guides')
@UseGuards(AuthGuard, RolesGuard)
export class HealthGuidesController {
  constructor(private readonly healthGuidesService: HealthGuidesService) {}

  @Post()
  @Roles(Role.Admin, Role.Doctor)
  @UsePipes(ValidationPipe)
  create(@Body() createHealthGuideDto: CreateHealthGuideDto) {
    return this.healthGuidesService.create(createHealthGuideDto);
  }

  @Get()
  @Roles(Role.Admin, Role.Doctor, Role.Patient, Role.Donor)
  findAll() {
    return this.healthGuidesService.findAll();
  }

  @Get(':id')
  @Roles(Role.Admin, Role.Doctor, Role.Patient, Role.Donor)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.healthGuidesService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.Admin, Role.Doctor)
  @UsePipes(ValidationPipe)
  update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateHealthGuideDto: UpdateHealthGuideDto
  ) {
    return this.healthGuidesService.update(id, updateHealthGuideDto);
  }

  @Delete(':id')
  @Roles(Role.Admin, Role.Doctor)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.healthGuidesService.remove(id);
  }
}
