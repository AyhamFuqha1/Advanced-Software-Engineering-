import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { VolunteerDoctor } from './entities/volunteer-doctor.entity';
import { CreateVolunteerDoctorDto } from './dto/create-volunteer-doctor.dto';
import { UpdateVolunteerDoctorDto } from './dto/update-volunteer-doctor.dto';

@Injectable()
export class VolunteerDoctorsService {
  constructor(
    @InjectRepository(VolunteerDoctor)
    private readonly volunteerRepo: Repository<VolunteerDoctor>,
  ) {}

  async create(createDto: CreateVolunteerDoctorDto) {
    const newVolunteer = this.volunteerRepo.create(createDto);
    return this.volunteerRepo.save(newVolunteer);
  }

  async findAll() {
    return this.volunteerRepo.find();
  }

  async findOne(id: number) {
    const volunteer = await this.volunteerRepo.findOne({
      where: { volunteer_id: id },
    });

    if (!volunteer) throw new NotFoundException(`Volunteer #${id} not found`);

    return volunteer;
  }

  async update(id: number, updateDto: UpdateVolunteerDoctorDto) {
    const volunteer = await this.volunteerRepo.findOne({
      where: { volunteer_id: id },
    });

    if (!volunteer) throw new NotFoundException(`Volunteer #${id} not found`);

    Object.assign(volunteer, updateDto); 

    return this.volunteerRepo.save(volunteer);
  }

  async remove(id: number) {
    const volunteer = await this.volunteerRepo.findOne({
      where: { volunteer_id: id },
    });

    if (!volunteer) throw new NotFoundException(`Volunteer #${id} not found`);

    return this.volunteerRepo.delete(volunteer);
  }
}
