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
  UseGuards,
} from '@nestjs/common';
import { DonorsService } from './donors.service';
import { CreateDonorDto } from './dto/create-donor.dto';
import { UpdateDonorDto } from './dto/update-donor.dto';
import {
  CreateDonationDto,
  CreateDonationDtoNonDoners,
} from './dto/create-donation';
import {
  CreateInventor_nonid,
  CreateInventorDto,
} from 'src/inventors/dto/create-inventor.dto';
import { RolesGuard } from 'src/guards/auth/roles/roles.guard';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { Roles } from 'src/decorators/roles/roles.decorator';
import { Role } from 'src/interfaces';

@Controller('donors')
@UseGuards(AuthGuard, RolesGuard)
export class DonorsController {
  constructor(private readonly donorsService: DonorsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  @Roles([Role.Admin])
  create(@Body() createDonorDto: CreateDonorDto) {
    return this.donorsService.create(createDonorDto);
  }

  @Get()
  @Roles([Role.Admin])
  findAll() {
    return this.donorsService.findAll();
  }

  @Get(':id')
  @Roles([Role.Admin])
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.donorsService.findOne(id);
  }

  @Patch(':id')
  @Roles([Role.Admin])
  @UsePipes(ValidationPipe)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDonorDto: UpdateDonorDto,
  ) {
    return this.donorsService.update(+id, updateDonorDto);
  }

  @Delete(':id')
  @Roles([Role.Admin])
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.donorsService.remove(+id);
  }

  @Post(':id/inventors')
  @UsePipes(ValidationPipe)
  @Roles([Role.Admin])
  creatInventors(
    @Param('id', ParseIntPipe) id,
    createInventorDto: CreateInventor_nonid,
  ) {
    return this.donorsService.createInventors(id, createInventorDto);
  }

  @Post(':id/donation')
  @Roles([Role.Admin])
  @UsePipes(ValidationPipe)
  creatDonation(
    @Param('id', ParseIntPipe) id,
    createDonationDtoNonDoners: CreateDonationDtoNonDoners,
  ) {
    return this.donorsService.createDonation(id, createDonationDtoNonDoners);
  }
}
