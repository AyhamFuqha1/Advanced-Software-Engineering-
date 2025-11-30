import { Injectable } from '@nestjs/common';
import { CreateHealthAlertDto } from './dto/create-health_alert.dto';
import { UpdateHealthAlertDto } from './dto/update-health_alert.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HealthAlert } from './entities/health_alert.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HealthAlertsService {
   constructor(
    @InjectRepository(HealthAlert)
    private readonly healthAlertRepository: Repository<HealthAlert>
  ) {}

  create(dto: CreateHealthAlertDto) {
    const alert = this.healthAlertRepository.create(dto);
    return this.healthAlertRepository.save(alert);
  }

  findAll() {
    return this.healthAlertRepository.find({
      order: { alert_id: 'DESC' }
    });
  }

  findOne(id: number) {
    return this.healthAlertRepository.findOne({ where: { alert_id: id } });
  }

  async update(id: number, dto: UpdateHealthAlertDto) {
    await this.healthAlertRepository.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.healthAlertRepository.delete(id);
  }
}