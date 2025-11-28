import { Test, TestingModule } from '@nestjs/testing';
import { DonReqController } from './don-req.controller';
import { DonReqService } from './don-req.service';

describe('DonReqController', () => {
  let controller: DonReqController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DonReqController],
      providers: [DonReqService],
    }).compile();

    controller = module.get<DonReqController>(DonReqController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
