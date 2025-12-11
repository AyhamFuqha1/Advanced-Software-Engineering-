import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MedicalMission } from './entities/medical-mission.entity';
import { CreateMedicalMissionDto } from './dto/create-medical-mission.dto';
import { UpdateMedicalMissionDto } from './dto/update-medical-mission.dto';

@Injectable()
export class MedicalMissionsService {
  constructor(
    @InjectRepository(MedicalMission)
    private readonly missionRepo: Repository<MedicalMission>,
  ) {}

  create(dto: CreateMedicalMissionDto) {
    const mission = this.missionRepo.create(dto);
    return this.missionRepo.save(mission);
  }

  findAll() {
    return this.missionRepo.find();
  }

  findOne(id: number) {
    return this.missionRepo.findOne({ where: { mission_id: id } });
  }

  async update(id: number, dto: UpdateMedicalMissionDto) {
    const mission = await this.missionRepo.findOne({ where: { mission_id: id } });
    if (!mission) throw new NotFoundException('Mission not found');

    Object.assign(mission, dto);
    return this.missionRepo.save(mission);
  }

  async remove(id: number) {
    const mission = await this.missionRepo.findOne({ where: { mission_id: id } });
    if (!mission) throw new NotFoundException('Mission not found');

    return this.missionRepo.delete(id);
  }
}
