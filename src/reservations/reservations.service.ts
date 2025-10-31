import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository(Reservation)
    private readonly doctorsRepository: Repository<Reservation>,
  ){}
  async create(createReservationDto: CreateReservationDto) {
    const res=await this.doctorsRepository.create(createReservationDto);
    return this.doctorsRepository.save(res);
  }

  findAll() {
    return this.doctorsRepository.find();
  }

  async findOne(id: number) {
    const res=await this.doctorsRepository.findOne({where:{reservation_id:id}})
    if(!res){
       return `not found`;
    }
    return this.doctorsRepository.save(res);
  }

  async update(id: number, updateReservationDto: UpdateReservationDto) {
    const res=await this.doctorsRepository.findOne({where:{reservation_id:id}})
    if(!res){
      throw new NotFoundException();
    }
    Object.assign(res,this.update);
    return this.doctorsRepository.save(res);
  }

 async remove(id: number) {
  const res=await this.doctorsRepository.findOne({where:{reservation_id:id}})
    if(!res){
       throw new NotFoundException();
    }
    return this.doctorsRepository.delete(res);
  }
}
