import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';

import { HealthAlertsService } from './health_alerts.service';
import { HealthAlertsController } from './health_alerts.controller';
import { HealthAlert } from './entities/health_alert.entity';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([HealthAlert]),
  ],
  controllers: [HealthAlertsController],
  providers: [HealthAlertsService],
  exports: [HealthAlertsService],   // ← هذا السطر هو الحل
})
export class HealthAlertsModule {}
