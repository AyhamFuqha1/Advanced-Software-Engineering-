import { Test, TestingModule } from '@nestjs/testing';
import { VolunteerDoctorsController } from './volunteer-doctors.controller';
import { VolunteerDoctorsService } from './volunteer-doctors.service';

describe('VolunteerDoctorsController', () => {
  let controller: VolunteerDoctorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VolunteerDoctorsController],
      providers: [VolunteerDoctorsService],
    }).compile();

    controller = module.get<VolunteerDoctorsController>(VolunteerDoctorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
