import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Repository } from 'typeorm';
import { Patients } from './patients.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateRequestingMedicineDto,
  CreateRequestingMedicineNonIdDto,
} from 'src/requesting_medicine/dto/create-requesting_medicine.dto';
import { RequestingMedicineService } from 'src/requesting_medicine/requesting_medicine.service';
import { CreateReservationDtoNonid } from 'src/reservations/dto/create-reservation.dto';
import { ReservationsService } from 'src/reservations/reservations.service';
import { CreateAnonymousTherapyChatDto } from 'src/anonymous_therapy_chats/dto/create-anonymous_therapy_chat.dto';
import { AnonymousTherapyChatsService } from 'src/anonymous_therapy_chats/anonymous_therapy_chats.service';
import { GroupsPatients } from './entities/patient_member.entity';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(Patients)
    private readonly patientsRepository: Repository<Patients>,
     @InjectRepository(GroupsPatients)
    private readonly groupPatientsdRepository: Repository<GroupsPatients>,
    private requestingMedicineService: RequestingMedicineService,
    private ReservationService: ReservationsService,
    private anonymous_therapy_chats:AnonymousTherapyChatsService,
 
  ) {}

  create(createPatientDto: CreatePatientDto) {
    const newPatient = this.patientsRepository.create(createPatientDto);
    return this.patientsRepository.save(newPatient);
  }

  async findAll() {
    return this.patientsRepository.find();
  }

  findOne(id: number) {
    return this.patientsRepository.findOne({ where: { patient_id: id } });
  }

  update(id: number, updatePatientDto: UpdatePatientDto) {
    return this.patientsRepository.update({ patient_id: id }, updatePatientDto);
  }

  remove(id: number) {
    return this.patientsRepository.delete({ patient_id: id });
  }

  createreservation(
    id: number,
    createReservationDtoNonid: CreateReservationDtoNonid,
  ) {
    return this.ReservationService.create({
      ...createReservationDtoNonid,
      patient_id: id,
    });
  }
  createRequsetMedicine(
    id: number,
    createRequestingMedicineNonIdDto: CreateRequestingMedicineNonIdDto,
  ) {
    return this.requestingMedicineService.create({
      ...createRequestingMedicineNonIdDto,
      id_patient: id,
    });
  }

  createanonymous_therapy_chats(createAnonymousTherapyChatDto: CreateAnonymousTherapyChatDto,) {
      return this.anonymous_therapy_chats.create(createAnonymousTherapyChatDto);
  }

}
