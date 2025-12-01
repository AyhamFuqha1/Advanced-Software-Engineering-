import { Module } from '@nestjs/common';
import { DonorsService } from './donors.service';
import { DonorsController } from './donors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Donor } from './entities/donor.entity';
import { Donation } from './entities/donation.entity';
import { Patient } from 'src/patients/entities/patient.entity';
import { InventorsModule } from 'src/inventors/inventors.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Donor, Donation, Patient]),
    InventorsModule,
  ],
  controllers: [DonorsController],
  providers: [DonorsService],
})
export class DonorsModule {}
