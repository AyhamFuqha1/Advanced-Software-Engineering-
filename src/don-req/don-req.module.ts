import { Module } from '@nestjs/common';
import { DonReqService } from './don-req.service';
import { DonReqController } from './don-req.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonReq } from './entities/don-req.entity';

@Module({
  imports:[TypeOrmModule.forFeature([DonReq])],
  controllers: [DonReqController],
  providers: [DonReqService],
})
export class DonReqModule {}
