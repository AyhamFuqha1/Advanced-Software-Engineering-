import { Test, TestingModule } from '@nestjs/testing';
import { MedicalNgosController } from './medical_ngos.controller';
import { MedicalNgosService } from './medical_ngos.service';

describe('MedicalNgosController', () => {
  let controller: MedicalNgosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalNgosController],
      providers: [MedicalNgosService],
    }).compile();

    controller = module.get<MedicalNgosController>(MedicalNgosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
