import { Module } from '@nestjs/common';
import { VolunteerDoctorsService } from './volunteer-doctors.service';
import { VolunteerDoctorsController } from './volunteer-doctors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VolunteerDoctor } from './entities/volunteer-doctor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VolunteerDoctor])],
  controllers: [VolunteerDoctorsController],
  providers: [VolunteerDoctorsService],
})
export class VolunteerDoctorsModule {}
