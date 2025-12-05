import { Injectable } from '@nestjs/common';
import { CreateSupportGroupDto } from './dto/create-support_group.dto';
import { UpdateSupportGroupDto } from './dto/update-support_group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SupportGroup } from './entities/support_group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SupportGroupsService {
   constructor(
    @InjectRepository(SupportGroup)
    private readonly supportGroupRepository: Repository<SupportGroup>,
  ) {}

  create(dto: CreateSupportGroupDto) {
    const group = this.supportGroupRepository.create(dto);
    return this.supportGroupRepository.save(group);
  }

  findAll() {
    return this.supportGroupRepository.find();
  }

  findOne(id: number) {
    return this.supportGroupRepository.findOne({ where: { group_id: id } });
  }

  async update(id: number, dto: UpdateSupportGroupDto) {
    await this.supportGroupRepository.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.supportGroupRepository.delete(id);
  }
}