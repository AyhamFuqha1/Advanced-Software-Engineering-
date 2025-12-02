import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { AnonymousTherapyChatsService } from './anonymous_therapy_chats.service';
import { CreateAnonymousTherapyChatDto } from './dto/create-anonymous_therapy_chat.dto';
import { UpdateAnonymousTherapyChatDto } from './dto/update-anonymous_therapy_chat.dto';

@Controller('anonymous-therapy-chats')
export class AnonymousTherapyChatsController {
  constructor(private readonly anonymousTherapyChatsService: AnonymousTherapyChatsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createAnonymousTherapyChatDto: CreateAnonymousTherapyChatDto) {
    return this.anonymousTherapyChatsService.create(createAnonymousTherapyChatDto);
  }

  @Get()
  findAll() {
    return this.anonymousTherapyChatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.anonymousTherapyChatsService.findOne(id);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  update(@Param('id',ParseIntPipe) id: number, @Body() updateAnonymousTherapyChatDto: UpdateAnonymousTherapyChatDto) {
    return this.anonymousTherapyChatsService.update(id, updateAnonymousTherapyChatDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.anonymousTherapyChatsService.remove(id);
  }
}
