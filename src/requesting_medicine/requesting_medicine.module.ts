import { Module } from '@nestjs/common';
import { RequestingMedicineService } from './requesting_medicine.service';
import { RequestingMedicineController } from './requesting_medicine.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestingMedicine } from './entities/requesting_medicine.entity';

@Module({
  imports:[TypeOrmModule.forFeature([RequestingMedicine])],
  exports: [RequestingMedicineService], 
  controllers: [RequestingMedicineController],
  providers: [RequestingMedicineService],
})
export class RequestingMedicineModule {}
