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

import { InventorsService } from './inventors.service';
import { CreateInventorDto } from './dto/create-inventor.dto';
import { UpdateInventorDto } from './dto/update-inventor.dto';

import { AuthGuard } from 'src/guards/auth/auth.guard';
import { RolesGuard } from 'src/guards/auth/roles/roles.guard';
import { Roles } from 'src/decorators/roles/roles.decorator';
import { Role } from 'src/interfaces';

@Controller('inventors')
@UseGuards(AuthGuard, RolesGuard)
export class InventorsController {
  constructor(private readonly inventorsService: InventorsService) {}

  @Post()
  @Roles(Role.Admin)
  @UsePipes(ValidationPipe)
  create(@Body() createInventorDto: CreateInventorDto) {
    return this.inventorsService.create(createInventorDto);
  }

  @Get()
  @Roles(Role.Admin)
  findAll() {
    return this.inventorsService.findAll();
  }

  @Get(':id')
  @Roles(Role.Admin)
  @UsePipes(ValidationPipe)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.inventorsService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.Admin)
  @UsePipes(ValidationPipe)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateInventorDto: UpdateInventorDto,
  ) {
    return this.inventorsService.update(id, updateInventorDto);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  @UsePipes(ValidationPipe)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.inventorsService.remove(id);
  }
}
