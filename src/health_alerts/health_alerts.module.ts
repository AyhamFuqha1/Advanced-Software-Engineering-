import { Module } from '@nestjs/common';
import { HealthAlertsService } from './health_alerts.service';
import { HealthAlertsController } from './health_alerts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthAlert } from './entities/health_alert.entity';

@Module({
  imports:[TypeOrmModule.forFeature([HealthAlert])],
  controllers: [HealthAlertsController],
  providers: [HealthAlertsService],
})
export class HealthAlertsModule {}
