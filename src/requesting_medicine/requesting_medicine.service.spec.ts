import { Test, TestingModule } from '@nestjs/testing';
import { RequestingMedicineService } from './requesting_medicine.service';

describe('RequestingMedicineService', () => {
  let service: RequestingMedicineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestingMedicineService],
    }).compile();

    service = module.get<RequestingMedicineService>(RequestingMedicineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
