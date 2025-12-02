import { Module } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { DoctorController } from './doctor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctor } from './entities/doctor.entity';
import { GroupDoctor } from './entities/doctor_member.entity';
import { HealthGuidesModule } from 'src/health_guides/health_guides.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Doctor, GroupDoctor]),
    HealthGuidesModule,
  ],

  controllers: [DoctorController],
  providers: [DoctorService],
})
export class DoctorModule {}
