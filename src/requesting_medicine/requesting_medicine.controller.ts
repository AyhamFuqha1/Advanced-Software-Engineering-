import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { RequestingMedicineService } from './requesting_medicine.service';
import { CreateRequestingMedicineDto } from './dto/create-requesting_medicine.dto';
import { UpdateRequestingMedicineDto } from './dto/update-requesting_medicine.dto';

@Controller('requesting-medicine')
export class RequestingMedicineController {
  constructor(private readonly requestingMedicineService: RequestingMedicineService) {}

  @Post()
  create(@Body() createRequestingMedicineDto: CreateRequestingMedicineDto) {
    return this.requestingMedicineService.create(createRequestingMedicineDto);
  }

  @Get()
  findAll() {
    return this.requestingMedicineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.requestingMedicineService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id',ParseIntPipe) id: number, @Body() updateRequestingMedicineDto: UpdateRequestingMedicineDto) {
    return this.requestingMedicineService.update(id, updateRequestingMedicineDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.requestingMedicineService.remove(id);
  }
}
