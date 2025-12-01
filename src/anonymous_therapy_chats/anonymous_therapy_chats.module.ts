import { Module } from '@nestjs/common';
import { AnonymousTherapyChatsService } from './anonymous_therapy_chats.service';
import { AnonymousTherapyChatsController } from './anonymous_therapy_chats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnonymousTherapyChat } from './entities/anonymous_therapy_chat.entity';

@Module({
  imports:[TypeOrmModule.forFeature([AnonymousTherapyChat])],
  exports:[AnonymousTherapyChatsService],
  controllers: [AnonymousTherapyChatsController],
  providers: [AnonymousTherapyChatsService],
})
export class AnonymousTherapyChatsModule {}
