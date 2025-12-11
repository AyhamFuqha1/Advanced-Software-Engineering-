import { Test, TestingModule } from '@nestjs/testing';
import { VolunteerDoctorsService } from './volunteer-doctors.service';

describe('VolunteerDoctorsService', () => {
  let service: VolunteerDoctorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VolunteerDoctorsService],
    }).compile();

    service = module.get<VolunteerDoctorsService>(VolunteerDoctorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
