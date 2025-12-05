import { Injectable } from '@nestjs/common';
import { CreateInventorDto} from './dto/create-inventor.dto';
import { UpdateInventorDto } from './dto/update-inventor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inventor } from './entities/inventor.entity';

@Injectable()
export class InventorsService {
  constructor(
    @InjectRepository(Inventor)
    private readonly inventoryRepo: Repository<Inventor>,
  ) {}

  create(createInventoryDto: CreateInventorDto) {
    const newItem = this.inventoryRepo.create(createInventoryDto);
    return this.inventoryRepo.save(newItem);
  }

  findAll() {
    return this.inventoryRepo.find();
  }

  findOne(id: number) {
    return this.inventoryRepo.findOne({ where: { id_item: id } });
  }

  update(id: number, updateInventoryDto: UpdateInventorDto) {
    return this.inventoryRepo.update(id, updateInventoryDto);
  }

  remove(id: number) {
    return this.inventoryRepo.delete(id);
  }
}