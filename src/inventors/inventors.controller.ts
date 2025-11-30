import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InventorsService } from './inventors.service';
import { CreateInventorDto } from './dto/create-inventor.dto';
import { UpdateInventorDto } from './dto/update-inventor.dto';

@Controller('inventors')
export class InventorsController {
  constructor(private readonly inventorsService: InventorsService) {}

  @Post('doners/:id')
  create(@Body() createInventorDto: CreateInventorDto) {
    return this.inventorsService.create(createInventorDto);
  }

  @Get()
  findAll() {
    return this.inventorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inventorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInventorDto: UpdateInventorDto) {
    return this.inventorsService.update(+id, updateInventorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inventorsService.remove(+id);
  }

  
}
