import { Module } from '@nestjs/common';
import { HealthGuidesService } from './health_guides.service';
import { HealthGuidesController } from './health_guides.controller';

@Module({
  controllers: [HealthGuidesController],
  providers: [HealthGuidesService],
})
export class HealthGuidesModule {}
