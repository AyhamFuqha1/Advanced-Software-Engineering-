import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDonReqDto } from './dto/create-don-req.dto';
import { UpdateDonReqDto } from './dto/update-don-req.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DonReq } from './entities/don-req.entity';
import { Repository } from 'typeorm';
import { Patient } from 'src/patients/entities/patient.entity';

@Injectable()
export class DonReqService {
  constructor(
    @InjectRepository(DonReq)
    private readonly donreqRepository: Repository<DonReq>,
     @InjectRepository(Patient)
        private readonly patientRepository: Repository<Patient>,
  ) {}

  async create(createDonReqDto: CreateDonReqDto) {
    const newReq = this.donreqRepository.create(createDonReqDto);
    return await this.donreqRepository.save(newReq);
  }

  async findAll() {
    return await this.donreqRepository.find();
  }

  async findOne(id: number) {
    const req = await this.donreqRepository.findOne({
      where: { id_request: id },
    });

    if (!req) {
      throw new NotFoundException(`Donation Request #${id} not found`);
    }

    return req;
  }

  async update(id: number, updateDonReqDto: UpdateDonReqDto) {
    const req = await this.donreqRepository.findOne({
      where: { id_request: id },
    });
    if (!req) {
      throw new NotFoundException(`Donation Request #${id} not found`);
    }

    const updated = Object.assign(req, updateDonReqDto);
    return await this.donreqRepository.save(updated);
  }

  
  async remove(id: number) {
    const req = await this.donreqRepository.findOne({
      where: { id_request: id },
    });
    if (!req) {
      throw new NotFoundException(`Donation Request #${id} not found`);
    }

    await this.donreqRepository.delete(id);
    return { message: `Donation Request #${id} deleted successfully` };
  }

  async getDashboard(id: number) {
    const patient = this.patientRepository.findOne({
      where: { id_patient: id },
    });
    if (!patient) {
      throw new NotFoundException();
    }
    return this.donreqRepository.find({ where: { id_patient: id } });
  }
}
