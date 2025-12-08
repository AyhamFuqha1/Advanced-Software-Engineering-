import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';

import { DonReqService } from './don-req.service';
import { CreateDonReqDto } from './dto/create-don-req.dto';
import { UpdateDonReqDto } from './dto/update-don-req.dto';

import { AuthGuard } from 'src/guards/auth/auth.guard';
import { RolesGuard } from 'src/guards/auth/roles/roles.guard';
import { Roles } from 'src/decorators/roles/roles.decorator';
import { Role } from 'src/interfaces';

@Controller('don-req')
@UseGuards(AuthGuard, RolesGuard)
export class DonReqController {
  constructor(private readonly donReqService: DonReqService) {}

  @Post()
  @Roles(Role.Admin, Role.Patient)
  @UsePipes(ValidationPipe)
  create(@Body() createDonReqDto: CreateDonReqDto) {
    return this.donReqService.create(createDonReqDto);
  }

  @Get()
  @Roles(Role.Admin, Role.Donor)
  findAll() {
    return this.donReqService.findAll();
  }

  @Get(':id')
  @Roles(Role.Admin, Role.Donor, Role.Patient)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.donReqService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.Admin)
  @UsePipes(ValidationPipe)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDonReqDto: UpdateDonReqDto,
  ) {
    return this.donReqService.update(id, updateDonReqDto);
  }


  @Delete(':id')
  @Roles(Role.Admin)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.donReqService.remove(id);
  }

  @Get('dashboard/:id')
  @Roles(Role.Admin, Role.Donor)
  getDashboard(@Param('id', ParseIntPipe) id: number) {
    return this.donReqService.getDashboard(id);
  }
}
