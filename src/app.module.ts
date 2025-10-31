import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorModule } from './doctor/doctor.module';
import { PatientsModule } from './patients/patients.module';
import { ReservationsModule } from './reservations/reservations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patients } from './patients/patients.entity';
import { Doctor } from './doctor/entities/doctor.entity';
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
      entities:[Patients,Doctor]
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
 
})
export class AppModule {}
