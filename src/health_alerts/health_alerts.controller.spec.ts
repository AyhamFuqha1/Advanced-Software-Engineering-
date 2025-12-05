import { Test, TestingModule } from '@nestjs/testing';
import { HealthAlertsController } from './health_alerts.controller';
import { HealthAlertsService } from './health_alerts.service';

describe('HealthAlertsController', () => {
  let controller: HealthAlertsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthAlertsController],
      providers: [HealthAlertsService],
    }).compile();

    controller = module.get<HealthAlertsController>(HealthAlertsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
