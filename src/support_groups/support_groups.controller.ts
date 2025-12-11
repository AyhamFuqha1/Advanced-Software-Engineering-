import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  ValidationPipe,
  UsePipes,
  UseGuards,
} from '@nestjs/common';
import { SupportGroupsService } from './support_groups.service';
import { CreateSupportGroupDto } from './dto/create-support_group.dto';
import { UpdateSupportGroupDto } from './dto/update-support_group.dto';

import { AuthGuard } from 'src/guards/auth/auth.guard';
import { RolesGuard } from 'src/guards/auth/roles/roles.guard';
import { Roles } from 'src/decorators/roles/roles.decorator';
import { Role } from 'src/interfaces';

@Controller('support-groups')
@UseGuards(AuthGuard, RolesGuard)
export class SupportGroupsController {
  constructor(private readonly supportGroupsService: SupportGroupsService) {}

  @Post()
  @Roles(Role.Admin)
  @UsePipes(ValidationPipe)
  create(@Body() createSupportGroupDto: CreateSupportGroupDto) {
    return this.supportGroupsService.create(createSupportGroupDto);
  }

  @Get()
  @Roles(Role.Admin, Role.Doctor)
  findAll() {
    return this.supportGroupsService.findAll();
  }

  @Get(':id')
  @Roles(Role.Admin, Role.Doctor, Role.Patient)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.supportGroupsService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.Admin)
  @UsePipes(ValidationPipe)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSupportGroupDto: UpdateSupportGroupDto,
  ) {
    return this.supportGroupsService.update(id, updateSupportGroupDto);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.supportGroupsService.remove(id);
  }
}
