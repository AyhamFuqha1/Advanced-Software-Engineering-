import { Test, TestingModule } from '@nestjs/testing';
import { SupportGroupsService } from './support_groups.service';

describe('SupportGroupsService', () => {
  let service: SupportGroupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupportGroupsService],
    }).compile();

    service = module.get<SupportGroupsService>(SupportGroupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
