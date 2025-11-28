import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorModule } from './doctor/doctor.module';
import { PatientsModule } from './patients/patients.module';
import { ReservationsModule } from './reservations/reservations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patients } from './patients/patients.entity';
import { Doctor } from './doctor/entities/doctor.entity';
import { TranslationsModule } from './translations/translations.module';
import { Reservation } from './reservations/entities/reservation.entity';
import { Translation } from './translations/entities/translation.entity';
import { DonReqModule } from './don-req/don-req.module';
import { DonorsModule } from './donors/donors.module';
import { DonReq } from './don-req/entities/don-req.entity';
import { Donor } from './donors/entities/donor.entity';
@Module({
  imports: [
    DoctorModule,
    PatientsModule,
    ReservationsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      database:"healthpal",
      username:"root",
      password:"",
      port:3306,
      host:'localhost',
      synchronize:false,
      entities:[Patients,Doctor,Reservation,Translation,DonReq,Donor]
    }),
    TranslationsModule,
    DonReqModule,
    DonorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
 
})
export class AppModule {}
