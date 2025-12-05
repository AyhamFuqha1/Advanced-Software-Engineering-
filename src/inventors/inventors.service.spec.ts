import { Test, TestingModule } from '@nestjs/testing';
import { InventorsService } from './inventors.service';

describe('InventorsService', () => {
  let service: InventorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InventorsService],
    }).compile();

    service = module.get<InventorsService>(InventorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
