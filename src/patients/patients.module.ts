import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patients } from './patients.entity';
import { GroupsPatients } from './entities/patient_member.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Patients,GroupsPatients])],
  controllers: [PatientsController],
  providers: [PatientsService],
})
export class PatientsModule {}
