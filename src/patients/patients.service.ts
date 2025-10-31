import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Repository } from 'typeorm';
import { Patients } from './patients.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(Patients)
    private readonly patientsRepository: Repository<Patients>,
  ) {}

  create(createPatientDto: CreatePatientDto) {
    const newPatient = this.patientsRepository.create(createPatientDto);
    return this.patientsRepository.save(newPatient);
  }

  async findAll() {
    return this.patientsRepository.find();
  }

  findOne(id: number) {
    return this.patientsRepository.findOne({where:{patient_id:id}});
  }

  update(id: number, updatePatientDto: UpdatePatientDto) {
    return this.patientsRepository.update({patient_id:id},updatePatientDto);
  }

  remove(id: number) {
    return this.patientsRepository.delete({patient_id:id});
  }
}
