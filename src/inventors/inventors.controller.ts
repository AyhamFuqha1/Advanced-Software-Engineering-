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
import { InventorsService } from './inventors.service';
import { CreateInventorDto } from './dto/create-inventor.dto';
import { UpdateInventorDto } from './dto/update-inventor.dto';

@Controller('inventors')
export class InventorsController {
  constructor(private readonly inventorsService: InventorsService) {}

  @Post('doners/:id')
  @UsePipes(ValidationPipe)
  create(@Body() createInventorDto: CreateInventorDto) {
    return this.inventorsService.create(createInventorDto);
  }

  @Get()
  findAll() {
    return this.inventorsService.findAll();
  }

  @Get(':id')
  @UsePipes(ValidationPipe)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.inventorsService.findOne(id);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateInventorDto: UpdateInventorDto,
  ) {
    return this.inventorsService.update(id, updateInventorDto);
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.inventorsService.remove(id);
  }
}
