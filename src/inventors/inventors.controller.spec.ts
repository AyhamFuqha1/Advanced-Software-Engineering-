import { Test, TestingModule } from '@nestjs/testing';
import { InventorsController } from './inventors.controller';
import { InventorsService } from './inventors.service';

describe('InventorsController', () => {
  let controller: InventorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InventorsController],
      providers: [InventorsService],
    }).compile();

    controller = module.get<InventorsController>(InventorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
