import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { AnonymousTherapyChatsService } from './anonymous_therapy_chats.service';
import { CreateAnonymousTherapyChatDto } from './dto/create-anonymous_therapy_chat.dto';
import { UpdateAnonymousTherapyChatDto } from './dto/update-anonymous_therapy_chat.dto';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { RolesGuard } from 'src/guards/auth/roles/roles.guard';
import { Role } from 'src/interfaces';
import { Roles } from 'src/decorators/roles/roles.decorator';

@Controller('anonymous-therapy-chats')
@UseGuards(AuthGuard, RolesGuard)

export class AnonymousTherapyChatsController {
  constructor(private readonly anonymousTherapyChatsService: AnonymousTherapyChatsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  @Roles([Role.Admin,Role.Patient])
  create(@Body() createAnonymousTherapyChatDto: CreateAnonymousTherapyChatDto) {
    return this.anonymousTherapyChatsService.create(createAnonymousTherapyChatDto);
  }

  @Get()
  @Roles([Role.Admin,Role.Doctor])
  findAll() {
    return this.anonymousTherapyChatsService.findAll();
  }

  @Get(':id')
  @Roles([Role.Admin])
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.anonymousTherapyChatsService.findOne(id);
  }

  @Patch(':id')
  @Roles([Role.Admin])
  @UsePipes(ValidationPipe)
  update(@Param('id',ParseIntPipe) id: number, @Body() updateAnonymousTherapyChatDto: UpdateAnonymousTherapyChatDto) {
    return this.anonymousTherapyChatsService.update(id, updateAnonymousTherapyChatDto);
  }

  @Delete(':id')
  @Roles([Role.Admin])
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.anonymousTherapyChatsService.remove(id);
  }
}
