import { Test, TestingModule } from '@nestjs/testing';
import { MedicalMissionsController } from './medical-missions.controller';
import { MedicalMissionsService } from './medical-missions.service';

describe('MedicalMissionsController', () => {
  let controller: MedicalMissionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalMissionsController],
      providers: [MedicalMissionsService],
    }).compile();

    controller = module.get<MedicalMissionsController>(MedicalMissionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
