import { Module } from '@nestjs/common';
import { HealthAlertsService } from './health_alerts.service';
import { HealthAlertsController } from './health_alerts.controller';

@Module({
  controllers: [HealthAlertsController],
  providers: [HealthAlertsService],
})
export class HealthAlertsModule {}
