import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
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
import { Donation } from './donors/entities/donation.entity';
import { WorkshopsModule } from './workshops/workshops.module';
import { Workshop } from './workshops/entities/workshop.entity';
import { InventorsModule } from './inventors/inventors.module';
import { RequestingMedicineModule } from './requesting_medicine/requesting_medicine.module';
import { MedicalNgosModule } from './medical_ngos/medical_ngos.module';
import { RequestingMedicine } from './requesting_medicine/entities/requesting_medicine.entity';
import { HealthGuidesModule } from './health_guides/health_guides.module';
import { HealthAlertsModule } from './health_alerts/health_alerts.module';
import { AnonymousTherapyChatsModule } from './anonymous_therapy_chats/anonymous_therapy_chats.module';
import { SupportGroupsModule } from './support_groups/support_groups.module';
import { LoginModule } from './login/login.module';
import { Login } from './login/entities/login.entity';
import { SupportGroup } from './support_groups/entities/support_group.entity';
import { AuthMiddleware } from './auth/auth.middleware';

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
      entities:[Patients,Doctor,Reservation,Translation,DonReq,Donor,Donation,Workshop,RequestingMedicine,Login,SupportGroup]
    }),
    TranslationsModule,
    DonReqModule,
    DonorsModule,
    WorkshopsModule,
    InventorsModule,
    RequestingMedicineModule,
    MedicalNgosModule,
    HealthGuidesModule,
    HealthAlertsModule,
    AnonymousTherapyChatsModule,
    SupportGroupsModule,
    LoginModule 
  ],
  controllers: [AppController],
  providers: [AppService],
 
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'doctor', method: RequestMethod.ALL }, // شغل middleware على كل doctor routes
      );
  }
}
