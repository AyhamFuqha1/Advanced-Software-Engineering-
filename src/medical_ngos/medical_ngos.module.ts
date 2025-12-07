import { Module } from '@nestjs/common';
import { MedicalNgosService } from './medical_ngos.service';
import { MedicalNgosController } from './medical_ngos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalNgo } from './entities/medical_ngo.entity';
import { HealthAlertsModule } from 'src/health_alerts/health_alerts.module';
import { WorkshopsModule } from 'src/workshops/workshops.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([MedicalNgo]),

    // الإضافة الصحيحة بدون أي تعديل آخر
    HealthAlertsModule,
    WorkshopsModule,
  ],
  controllers: [MedicalNgosController],
  providers: [MedicalNgosService],
})
export class MedicalNgosModule {}
