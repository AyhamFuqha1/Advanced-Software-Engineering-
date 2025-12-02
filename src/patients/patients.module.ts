import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patients } from './patients.entity';
import { GroupsPatients } from './entities/patient_member.entity';
import { RequestingMedicineModule } from 'src/requesting_medicine/requesting_medicine.module';
import { ReservationsModule } from 'src/reservations/reservations.module';
import { AnonymousTherapyChatsModule } from 'src/anonymous_therapy_chats/anonymous_therapy_chats.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Patients, GroupsPatients]),
    RequestingMedicineModule, 
    ReservationsModule,
    AnonymousTherapyChatsModule,
  ],

  controllers: [PatientsController],
  providers: [PatientsService],
})
export class PatientsModule {}
