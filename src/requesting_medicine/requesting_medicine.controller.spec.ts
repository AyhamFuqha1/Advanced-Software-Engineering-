import { Test, TestingModule } from '@nestjs/testing';
import { RequestingMedicineController } from './requesting_medicine.controller';
import { RequestingMedicineService } from './requesting_medicine.service';

describe('RequestingMedicineController', () => {
  let controller: RequestingMedicineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestingMedicineController],
      providers: [RequestingMedicineService],
    }).compile();

    controller = module.get<RequestingMedicineController>(RequestingMedicineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
