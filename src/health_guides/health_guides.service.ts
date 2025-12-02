import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHealthGuideDto } from './dto/create-health_guide.dto';
import { UpdateHealthGuideDto } from './dto/update-health_guide.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HealthGuide } from './entities/health_guide.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HealthGuidesService {
  constructor(
    @InjectRepository(HealthGuide)
    private readonly guideRepo: Repository<HealthGuide>,
  ) {}
  async create(dto: CreateHealthGuideDto) {
    const entity = this.guideRepo.create(dto);
    return this.guideRepo.save(entity);
  }

  async findAll() {
    return this.guideRepo.find();
  }

  async findOne(id: number) {
    const guide = await this.guideRepo.findOne({ where: { guide_id: id } });
    if (!guide) throw new NotFoundException('Health guide not found');
    return guide;
  }

  async update(id: number, dto: UpdateHealthGuideDto) {
    const guide = await this.findOne(id);
    Object.assign(guide, dto);
    return this.guideRepo.save(guide);
  }

  async remove(id: number) {
    const result = await this.guideRepo.delete(id);
    if (result.affected === 0)
      throw new NotFoundException('Health guide not found');
    return { message: `Health guide #${id} deleted` };
  }
}
