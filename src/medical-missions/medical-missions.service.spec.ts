import { Test, TestingModule } from '@nestjs/testing';
import { MedicalMissionsService } from './medical-missions.service';

describe('MedicalMissionsService', () => {
  let service: MedicalMissionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicalMissionsService],
    }).compile();

    service = module.get<MedicalMissionsService>(MedicalMissionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
