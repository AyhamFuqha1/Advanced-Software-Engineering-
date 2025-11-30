import { Module } from '@nestjs/common';
import { RequestingMedicineService } from './requesting_medicine.service';
import { RequestingMedicineController } from './requesting_medicine.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([RequestingMedicineController])],
  controllers: [RequestingMedicineController],
  providers: [RequestingMedicineService],
})
export class RequestingMedicineModule {}
