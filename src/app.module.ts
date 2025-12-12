import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DoctorModule } from './doctor/doctor.module';
import { PatientsModule } from './patients/patients.module';
import { ReservationsModule } from './reservations/reservations.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Patients } from './patients/patients.entity';
import { Doctor } from './doctor/entities/doctor.entity';
import { Reservation } from './reservations/entities/reservation.entity';
import { Translation } from './translations/entities/translation.entity';
import { DonReq } from './don-req/entities/don-req.entity';
import { Donor } from './donors/entities/donor.entity';
import { Donation } from './donors/entities/donation.entity';
import { Workshop } from './workshops/entities/workshop.entity';
import { RequestingMedicine } from './requesting_medicine/entities/requesting_medicine.entity';
import { SupportGroup } from './support_groups/entities/support_group.entity';
import { AnonymousTherapyChat } from './anonymous_therapy_chats/entities/anonymous_therapy_chat.entity';
import { HealthAlert } from './health_alerts/entities/health_alert.entity';
import { MedicalNgo } from './medical_ngos/entities/medical_ngo.entity';
import { HealthGuide } from './health_guides/entities/health_guide.entity';
import { Inventor } from './inventors/entities/inventor.entity';
import { VolunteerDoctor } from './volunteer-doctors/entities/volunteer-doctor.entity';
import { MedicalMission } from './medical-missions/entities/medical-mission.entity';

import { TranslationsModule } from './translations/translations.module';
import { DonReqModule } from './don-req/don-req.module';
import { DonorsModule } from './donors/donors.module';
import { WorkshopsModule } from './workshops/workshops.module';
import { InventorsModule } from './inventors/inventors.module';
import { RequestingMedicineModule } from './requesting_medicine/requesting_medicine.module';
import { MedicalNgosModule } from './medical_ngos/medical_ngos.module';
import { HealthGuidesModule } from './health_guides/health_guides.module';
import { HealthAlertsModule } from './health_alerts/health_alerts.module';
import { AnonymousTherapyChatsModule } from './anonymous_therapy_chats/anonymous_therapy_chats.module';
import { SupportGroupsModule } from './support_groups/support_groups.module';

import { Login } from './login/entities/login.entity';
import { LoginModule } from './login/login.module';

import { AuthMiddleware } from './middleware/auth.middleware';

@Module({
  imports: [
    DoctorModule,
    PatientsModule,
    ReservationsModule,

    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'healthpal',
      username: 'root',
      password: '',
      port: 3306,
      host: 'localhost',
      synchronize: false,
      entities: [
        Patients,
        Doctor,
        Reservation,
        Translation,
        DonReq,
        Donor,
        Donation,
        Workshop,
        RequestingMedicine,
        SupportGroup,
        AnonymousTherapyChat,
        HealthAlert,
        MedicalNgo,
        HealthGuide,
        Inventor,
        Login,
        VolunteerDoctor,
        MedicalMission,
      ],
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
    LoginModule,
    LoginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
  .apply(AuthMiddleware)
.exclude(
  { path: 'login', method: RequestMethod.ALL }
)
.forRoutes(
  { path: 'anonymous-therapy-chats', method: RequestMethod.ALL },
  { path: 'anonymous-therapy-chats/*', method: RequestMethod.ALL },

  { path: 'doctor', method: RequestMethod.ALL },
  { path: 'doctor/*', method: RequestMethod.ALL },

  { path: 'patients', method: RequestMethod.ALL },
  { path: 'patients/*', method: RequestMethod.ALL },

  { path: 'donors', method: RequestMethod.ALL },
  { path: 'donors/*', method: RequestMethod.ALL },

  { path: 'don-req', method: RequestMethod.ALL },
  { path: 'don-req/*', method: RequestMethod.ALL },

  { path: 'health-alerts', method: RequestMethod.ALL },
  { path: 'health-alerts/*', method: RequestMethod.ALL },

  { path: 'health-guides', method: RequestMethod.ALL },
  { path: 'health-guides/*', method: RequestMethod.ALL },

  { path: 'inventors', method: RequestMethod.ALL },
  { path: 'inventors/*', method: RequestMethod.ALL },

  { path: 'requesting-medicine', method: RequestMethod.ALL },
  { path: 'requesting-medicine/*', method: RequestMethod.ALL },

  { path: 'reservations', method: RequestMethod.ALL },
  { path: 'reservations/*', method:RequestMethod.ALL },

  { path: 'support-groups', method: RequestMethod.ALL },
  { path: 'support-groups/*', method:RequestMethod.ALL },

  { path: 'workshops', method: RequestMethod.ALL },
  { path: 'workshops/*', method:RequestMethod.ALL },
);


  }
}
