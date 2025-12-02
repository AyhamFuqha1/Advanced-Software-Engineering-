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
} from '@nestjs/common';
import { DonReqService } from './don-req.service';
import { CreateDonReqDto } from './dto/create-don-req.dto';
import { UpdateDonReqDto } from './dto/update-don-req.dto';

@Controller('don-req')
export class DonReqController {
  constructor(private readonly donReqService: DonReqService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createDonReqDto: CreateDonReqDto) {
    return this.donReqService.create(createDonReqDto);
  }

  @Get()
  findAll() {
    return this.donReqService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.donReqService.findOne(id);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  update(@Param('id') id: number, @Body() updateDonReqDto: UpdateDonReqDto) {
    return this.donReqService.update(id, updateDonReqDto);
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.donReqService.remove(id);
  }

  @Get('dashbard/:id')
  getDashboard(@Param('id', ParseIntPipe) id) {
    return this.donReqService.getDashboard(id);
  }
}
