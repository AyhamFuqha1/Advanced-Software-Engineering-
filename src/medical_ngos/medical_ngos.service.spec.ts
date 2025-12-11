import { Test, TestingModule } from '@nestjs/testing';
import { MedicalNgosService } from './medical_ngos.service';

describe('MedicalNgosService', () => {
  let service: MedicalNgosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicalNgosService],
    }).compile();

    service = module.get<MedicalNgosService>(MedicalNgosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
