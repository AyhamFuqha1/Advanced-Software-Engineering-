import { Test, TestingModule } from '@nestjs/testing';
import { AnonymousTherapyChatsService } from './anonymous_therapy_chats.service';

describe('AnonymousTherapyChatsService', () => {
  let service: AnonymousTherapyChatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnonymousTherapyChatsService],
    }).compile();

    service = module.get<AnonymousTherapyChatsService>(AnonymousTherapyChatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
