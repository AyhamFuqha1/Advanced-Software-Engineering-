import { Test, TestingModule } from '@nestjs/testing';
import { HealthAlertsService } from './health_alerts.service';

describe('HealthAlertsService', () => {
  let service: HealthAlertsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthAlertsService],
    }).compile();

    service = module.get<HealthAlertsService>(HealthAlertsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
