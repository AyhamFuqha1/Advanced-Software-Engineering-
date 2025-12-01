import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Doctor } from './entities/doctor.entity';
import { Repository } from 'typeorm';
import { CreateHealthGuideDtoNonId } from 'src/health_guides/dto/create-health_guide.dto';
import { HealthGuidesService } from 'src/health_guides/health_guides.service';
import { GroupDoctor } from './entities/doctor_member.entity';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorsRepository: Repository<Doctor>,
    @InjectRepository(Doctor)
    private readonly groupDoctorsRepository: Repository<GroupDoctor>,
    private healthGuide:HealthGuidesService
  ) {}
  create(createDoctorDto: CreateDoctorDto) {
    const creatDoctor = this.doctorsRepository.create(createDoctorDto);
    return this.doctorsRepository.save(creatDoctor);
  }

  findAll() {
    return this.doctorsRepository.find();
  }

  findOne(id: number) {
    return this.doctorsRepository.findOne({ where: { doctor_id: id } });
  }

  async update(id: number, updateDoctorDto: UpdateDoctorDto) {
    const doctor = await this.doctorsRepository.findOne({
      where: { doctor_id: id },
    });
    if (!doctor) {
      throw new NotFoundException(`Doctor with ID ${id} not found`);
    }
    Object.assign(doctor, updateDoctorDto);
    return this.doctorsRepository.save(doctor);
  }

  async remove(id: number) {
    const doctor = await this.findOne(id);
    if (!doctor) {
      throw new NotFoundException();
    }
    return this.doctorsRepository.delete(id);
  }

  createHealthGuides(
    id: number,
    createHealthGuideDtoNonId: CreateHealthGuideDtoNonId,
  ) {
      return this.healthGuide.create({...createHealthGuideDtoNonId,doctor_id:id})
  }

  addToGroup(id:number,id_group:number){
    this.groupDoctorsRepository.create({doctor_id:id,group_id:id})
  }
}
