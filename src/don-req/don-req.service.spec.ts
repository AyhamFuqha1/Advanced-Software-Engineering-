import { Test, TestingModule } from '@nestjs/testing';
import { DonReqService } from './don-req.service';

describe('DonReqService', () => {
  let service: DonReqService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DonReqService],
    }).compile();

    service = module.get<DonReqService>(DonReqService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
