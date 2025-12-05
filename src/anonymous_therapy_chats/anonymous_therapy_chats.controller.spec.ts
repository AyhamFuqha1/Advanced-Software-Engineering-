import { Test, TestingModule } from '@nestjs/testing';
import { AnonymousTherapyChatsController } from './anonymous_therapy_chats.controller';
import { AnonymousTherapyChatsService } from './anonymous_therapy_chats.service';

describe('AnonymousTherapyChatsController', () => {
  let controller: AnonymousTherapyChatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnonymousTherapyChatsController],
      providers: [AnonymousTherapyChatsService],
    }).compile();

    controller = module.get<AnonymousTherapyChatsController>(AnonymousTherapyChatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
