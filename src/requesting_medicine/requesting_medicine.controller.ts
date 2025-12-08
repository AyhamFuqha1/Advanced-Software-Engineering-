import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { RequestingMedicineService } from './requesting_medicine.service';
import { CreateRequestingMedicineDto } from './dto/create-requesting_medicine.dto';
import { UpdateRequestingMedicineDto } from './dto/update-requesting_medicine.dto';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { RolesGuard } from 'src/guards/auth/roles/roles.guard';
import { Roles } from 'src/decorators/roles/roles.decorator';
import { Role } from 'src/interfaces';

@Controller('requesting-medicine')
@UseGuards(AuthGuard, RolesGuard)
export class RequestingMedicineController {
  constructor(private readonly requestingMedicineService: RequestingMedicineService) {}

  @Post()
  @Roles(Role.Patient, Role.Admin)
  @UsePipes(ValidationPipe)
  create(@Body() createRequestingMedicineDto: CreateRequestingMedicineDto) {
    return this.requestingMedicineService.create(createRequestingMedicineDto);
  }

  @Get()
  @Roles(Role.Admin)
  findAll() {
    return this.requestingMedicineService.findAll();
  }

  @Get(':id')
  @Roles(Role.Admin, Role.Patient)
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.requestingMedicineService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.Admin)
  @UsePipes(ValidationPipe)
  update(@Param('id',ParseIntPipe) id: number, @Body() updateRequestingMedicineDto: UpdateRequestingMedicineDto) {
    return this.requestingMedicineService.update(id, updateRequestingMedicineDto);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.requestingMedicineService.remove(id);
  }
}
