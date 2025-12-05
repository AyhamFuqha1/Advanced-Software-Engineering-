import { Test, TestingModule } from '@nestjs/testing';
import { HealthGuidesController } from './health_guides.controller';
import { HealthGuidesService } from './health_guides.service';

describe('HealthGuidesController', () => {
  let controller: HealthGuidesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthGuidesController],
      providers: [HealthGuidesService],
    }).compile();

    controller = module.get<HealthGuidesController>(HealthGuidesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
