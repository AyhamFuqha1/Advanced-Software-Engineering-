import { Module } from '@nestjs/common';
import { HealthGuidesService } from './health_guides.service';
import { HealthGuidesController } from './health_guides.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthGuide } from './entities/health_guide.entity';

@Module({
  imports:[TypeOrmModule.forFeature([HealthGuide])],
  exports: [HealthGuidesService],
  controllers: [HealthGuidesController],
  providers: [HealthGuidesService],
})
export class HealthGuidesModule {}
