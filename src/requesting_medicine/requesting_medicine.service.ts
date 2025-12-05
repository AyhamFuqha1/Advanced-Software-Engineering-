import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRequestingMedicineDto } from './dto/create-requesting_medicine.dto';
import { UpdateRequestingMedicineDto } from './dto/update-requesting_medicine.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RequestingMedicine } from './entities/requesting_medicine.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RequestingMedicineService {
  constructor(
    @InjectRepository(RequestingMedicine)
    private readonly requestRepo: Repository<RequestingMedicine>,
  ) {}
  async create(createRequestingMedicineDto: CreateRequestingMedicineDto) {
    const record = this.requestRepo.create(createRequestingMedicineDto);
    return await this.requestRepo.save(record);
  }

  findAll() {
    return this.requestRepo.find();
  }

  async findOne(id: number) {
    const record = await this.requestRepo.findOne({
      where: { id_requesting_medicine: id },
    });
    if (!record) {
      throw new NotFoundException('Requesting Medicine not found');
    }
    return record;
  }

  async update(
    id: number,
    updateRequestingMedicineDto: UpdateRequestingMedicineDto,
  ) {
    const record = await this.findOne(id);
    if (!record) {
      throw new NotFoundException();
    }
    const updated = Object.assign(record, updateRequestingMedicineDto);
    return await this.requestRepo.save(updated);
  }

  async remove(id: number) {
    const result = await this.requestRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Request not found.');
    }
    return { message: 'Deleted successfully' };
  }
}
