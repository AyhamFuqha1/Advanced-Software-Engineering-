import { Test, TestingModule } from '@nestjs/testing';
import { SupportGroupsController } from './support_groups.controller';
import { SupportGroupsService } from './support_groups.service';

describe('SupportGroupsController', () => {
  let controller: SupportGroupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SupportGroupsController],
      providers: [SupportGroupsService],
    }).compile();

    controller = module.get<SupportGroupsController>(SupportGroupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
