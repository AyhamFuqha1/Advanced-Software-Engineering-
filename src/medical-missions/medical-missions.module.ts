import { Module } from '@nestjs/common';
import { MedicalMissionsService } from './medical-missions.service';
import { MedicalMissionsController } from './medical-missions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalMission } from './entities/medical-mission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MedicalMission])],
  controllers: [MedicalMissionsController],
  providers: [MedicalMissionsService],
})
export class MedicalMissionsModule {}
