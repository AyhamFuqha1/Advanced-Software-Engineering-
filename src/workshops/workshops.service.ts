import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWorkshopDto } from './dto/create-workshop.dto';
import { UpdateWorkshopDto } from './dto/update-workshop.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Workshop } from './entities/workshop.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WorkshopsService {
  constructor(
    @InjectRepository(Workshop)
    private readonly workshopRepo: Repository<Workshop>,
  ) {}

  async create(createDto: CreateWorkshopDto) {
    const entity = this.workshopRepo.create(createDto);
    return await this.workshopRepo.save(entity);
  }

  async findAll() {
    return await this.workshopRepo.find();
  }

  async findOne(id: number) {
    const w = await this.workshopRepo.findOne({ where: { id_workshop: id } });
    if (!w) throw new NotFoundException(`Workshop #${id} not found`);
    return w;
  }

  async update(id: number, updateDto: UpdateWorkshopDto) {
    const w = await this.findOne(id);
    Object.assign(w, updateDto);
    return await this.workshopRepo.save(w);
  }

  async remove(id: number) {
    const w = await this.findOne(id);
    await this.workshopRepo.delete(id);
    return { message: `Workshop #${id} deleted` };
  }
}