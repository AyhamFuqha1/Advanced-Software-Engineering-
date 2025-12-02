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

@Controller('donors')
export class DonorsController {
  constructor(private readonly donorsService: DonorsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createDonorDto: CreateDonorDto) {
    return this.donorsService.create(createDonorDto);
  }

  @Get()
  findAll() {
    return this.donorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.donorsService.findOne(id);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDonorDto: UpdateDonorDto,
  ) {
    return this.donorsService.update(+id, updateDonorDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.donorsService.remove(+id);
  }

  @Post(':id/inventors')
  @UsePipes(ValidationPipe)
  creatInventors(
    @Param('id', ParseIntPipe) id,
    createInventorDto: CreateInventor_nonid,
  ) {
    return this.donorsService.createInventors(id, createInventorDto);
  }

  @Post(':id/donation')
  @UsePipes(ValidationPipe)
  creatDonation(
    @Param('id', ParseIntPipe) id,
    createDonationDtoNonDoners: CreateDonationDtoNonDoners,
  ) {
    return this.donorsService.createDonation(id, createDonationDtoNonDoners);
  }
}
