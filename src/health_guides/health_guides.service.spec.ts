import { Test, TestingModule } from '@nestjs/testing';
import { HealthGuidesService } from './health_guides.service';

describe('HealthGuidesService', () => {
  let service: HealthGuidesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthGuidesService],
    }).compile();

    service = module.get<HealthGuidesService>(HealthGuidesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
