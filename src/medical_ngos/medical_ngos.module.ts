import { Module } from '@nestjs/common';
import { MedicalNgosService } from './medical_ngos.service';
import { MedicalNgosController } from './medical_ngos.controller';

@Module({
  controllers: [MedicalNgosController],
  providers: [MedicalNgosService],
})
export class MedicalNgosModule {}
