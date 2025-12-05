import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMedicalNgoDto } from './dto/create-medical_ngo.dto';
import { UpdateMedicalNgoDto } from './dto/update-medical_ngo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MedicalNgo } from './entities/medical_ngo.entity';
import { Repository } from 'typeorm';
import { CreateHealthAlertDtoNonMecical } from 'src/health_alerts/dto/create-health_alert.dto';
import { HealthAlertsService } from 'src/health_alerts/health_alerts.service';
import { CreateWorkshopDtoNonMedical } from 'src/workshops/dto/create-workshop.dto';
import { WorkshopsService } from 'src/workshops/workshops.service';

@Injectable()
export class MedicalNgosService {
  constructor(
    @InjectRepository(MedicalNgo)
    private readonly repo: Repository<MedicalNgo>,

    private healthAlert: HealthAlertsService,
    private workShop:WorkshopsService
  ) {}

  async create(dto: CreateMedicalNgoDto) {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  async findAll() {
    return this.repo.find({ order: { medical_id: 'ASC' } });
  }

  async findOne(id: number) {
    const entity = await this.repo.findOne({ where: { medical_id: id } });
    if (!entity) throw new NotFoundException(`Medical NGO #${id} not found`);
    return entity;
  }

  async update(id: number, dto: UpdateMedicalNgoDto) {
    const entity = await this.findOne(id);
    Object.assign(entity, dto);
    return this.repo.save(entity);
  }

  async remove(id: number) {
    const result = await this.repo.delete(id);
    if (result.affected === 0)
      throw new NotFoundException(`Medical NGO #${id} not found`);
    return { message: `Medical NGO #${id} deleted` };
  }

  createHealthAlert(
    id: number,
    createHealthAlertDtoNonMecical: CreateHealthAlertDtoNonMecical,
  ) {
    const medical = this.findOne(id);
    if (!medical) {
      throw new NotFoundException();
    }

    this.healthAlert.create({
      ...createHealthAlertDtoNonMecical,
      medical_id: id,
    });
  }

  createWorkShop(
    id: number,
    createWorkshopDtoNonMedical: CreateWorkshopDtoNonMedical,
  ) {
    const medical = this.findOne(id);
    if (!medical) {
      throw new NotFoundException();
    }

    this.workShop.create({
      ...createWorkshopDtoNonMedical,
      id_medical: id,
    });
  }
}
