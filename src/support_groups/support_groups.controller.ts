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
} from '@nestjs/common';
import { SupportGroupsService } from './support_groups.service';
import { CreateSupportGroupDto } from './dto/create-support_group.dto';
import { UpdateSupportGroupDto } from './dto/update-support_group.dto';

@Controller('support-groups')
export class SupportGroupsController {
  constructor(private readonly supportGroupsService: SupportGroupsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createSupportGroupDto: CreateSupportGroupDto) {
    return this.supportGroupsService.create(createSupportGroupDto);
  }

  @Get()
  findAll() {
    return this.supportGroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.supportGroupsService.findOne(+id);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateSupportGroupDto: UpdateSupportGroupDto,
  ) {
    return this.supportGroupsService.update(+id, updateSupportGroupDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.supportGroupsService.remove(+id);
  }
}
