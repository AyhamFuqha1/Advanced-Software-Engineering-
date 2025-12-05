import { Injectable } from '@nestjs/common';
import { CreateAnonymousTherapyChatDto } from './dto/create-anonymous_therapy_chat.dto';
import { UpdateAnonymousTherapyChatDto } from './dto/update-anonymous_therapy_chat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AnonymousTherapyChat } from './entities/anonymous_therapy_chat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnonymousTherapyChatsService {
   constructor(
    @InjectRepository(AnonymousTherapyChat)
    private readonly chatRepo: Repository<AnonymousTherapyChat>,
  ) {}

  create(dto: CreateAnonymousTherapyChatDto) {
    const chat = this.chatRepo.create(dto);
    return this.chatRepo.save(chat);
  }

  findAll() {
    return this.chatRepo.find();
  }

  findOne(id: number) {
    return this.chatRepo.findOne({ where: { chat_id: id } });
  }

  async update(id: number, dto: UpdateAnonymousTherapyChatDto) {
    await this.chatRepo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.chatRepo.delete(id);
  }
}