import { Module } from '@nestjs/common';
import { MedicalNgosService } from './medical_ngos.service';
import { MedicalNgosController } from './medical_ngos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalNgo } from './entities/medical_ngo.entity';

@Module({
  imports:[TypeOrmModule.forFeature([MedicalNgo])],
  controllers: [MedicalNgosController],
  providers: [MedicalNgosService],
})
export class MedicalNgosModule {}
