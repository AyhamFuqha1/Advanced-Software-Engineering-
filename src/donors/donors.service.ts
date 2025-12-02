import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Donor } from './entities/donor.entity';
import { CreateDonorDto } from './dto/create-donor.dto';
import { UpdateDonorDto } from './dto/update-donor.dto';
import { Donation } from './entities/donation.entity';
import { CreateDonationDto, CreateDonationDtoNonDoners } from './dto/create-donation';
import { Patient } from 'src/patients/entities/patient.entity';
import { InventorsService } from 'src/inventors/inventors.service';
import { CreateInventor_nonid, CreateInventorDto } from 'src/inventors/dto/create-inventor.dto';

@Injectable()
export class DonorsService {
  constructor(
    @InjectRepository(Donor)
    private readonly donorsRepository: Repository<Donor>,
    @InjectRepository(Donation)
    private readonly donationRepository: Repository<Donation>,
    private inventoryService: InventorsService
  ) {}

  async create(createDonorDto: CreateDonorDto) {
    const donor = this.donorsRepository.create(createDonorDto);
    return await this.donorsRepository.save(donor);
  }

  async findAll() {
    return await this.donorsRepository.find();
  }

  async findOne(id: number) {
    const donor = await this.donorsRepository.findOne({
      where: { id_donors: id },
    });

    if (!donor) {
      throw new NotFoundException(`Donor #${id} not found`);
    }

    return donor;
  }

  async update(id: number, updateDonorDto: UpdateDonorDto) {
    const donor = await this.findOne(id);

    const updated = Object.assign(donor, updateDonorDto);
    return await this.donorsRepository.save(updated);
  }

  async remove(id: number) {
    await this.findOne(id);

    await this.donorsRepository.delete(id);
    return { message: `Donor #${id} deleted successfully` };
  }


  createInventors(id,createInventorDto:CreateInventor_nonid){
     return this.inventoryService.create({...createInventorDto,id_doners:id});
  }

  async createDonation(id:number,createDonationDtoNonDoners: CreateDonationDtoNonDoners) {
    const found =this.findOne(id);
    if(!found){
      throw new NotFoundException();
    }
    const newDonation = await this.donationRepository.create({...CreateDonationDtoNonDoners,id_donation:id});
    return this.donationRepository.save(newDonation);
  }



}
