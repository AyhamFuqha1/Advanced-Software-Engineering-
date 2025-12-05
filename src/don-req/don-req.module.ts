import { Module } from '@nestjs/common';
import { DonReqService } from './don-req.service';
import { DonReqController } from './don-req.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonReq } from './entities/don-req.entity';
import { Patient } from 'src/patients/entities/patient.entity';

@Module({
  imports:[TypeOrmModule.forFeature([DonReq,Patient])],
  controllers: [DonReqController],
  providers: [DonReqService],
})
export class DonReqModule {}
