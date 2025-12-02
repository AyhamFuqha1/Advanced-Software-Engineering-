import { Module } from '@nestjs/common';
import { TranslationsService } from './translations.service';
import { TranslationsController } from './translations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Translation } from './entities/translation.entity';
import { Reservation } from 'src/reservations/entities/reservation.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Translation,Reservation])],
  controllers: [TranslationsController],
  providers: [TranslationsService],
})
export class TranslationsModule {}
