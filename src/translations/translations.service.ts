import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTranslationDto } from './dto/create-translation.dto';
import { UpdateTranslationDto } from './dto/update-translation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Translation } from './entities/translation.entity';
import { Repository } from 'typeorm';
import { Reservation } from 'src/reservations/entities/reservation.entity';
import {translate} from '@vitalets/google-translate-api';
import { languageMap } from './language';


@Injectable()
export class TranslationsService {
  constructor(
    @InjectRepository(Translation)
    private readonly translationRepository: Repository<Translation>,

    @InjectRepository(Reservation)
    private readonly reservationRepository: Repository<Reservation>,
  ) {}
  create(createTranslationDto: CreateTranslationDto) {
    const newTransmation= this.translationRepository.create(createTranslationDto);

    return this.translationRepository.save(newTransmation);
    
  }

  findAll() {
    return this.translationRepository.find();
  }

  findOne(id: number) {
    const translation = this.translationRepository.findOne({
      where: { translation_id: id },
    });
    if (!translation) {
      throw new NotFoundException();
    }
    return translation;
  }

  async update(id: number, updateTranslationDto: UpdateTranslationDto) {
    const translation = await this.translationRepository.findOne({
      where: { translation_id: id },
    });
    if (!translation) {
      throw new NotFoundException();
    }
    Object.assign(translation, updateTranslationDto);
    return this.translationRepository.save(translation);
  }

  async remove(id: number) {
    const translation = await this.translationRepository.findOne({
      where: { translation_id: id },
    });
    if (!translation) {
      throw new NotFoundException();
    }
    return this.translationRepository.delete(translation);
  }

  getTranslation(id: number, language: string) {
    const translation = this.translationRepository.findOne({
      where: { reservation_id: id, language: language },
    });
    if (!translation) {
      throw new NotFoundException();
    }
    return translation;
  }

  async createTranslation(id: number, language: string) {
    const reservation = await this.reservationRepository.findOne({
      where: { reservation_id: id },
    });
    if (!reservation) {
      throw new NotFoundException();
    }
    const result = await translate(reservation.medical_condition, {to: languageMap[language.toLowerCase()]});
    const trans = {
      reservation_id: id,
      translated_text: result.text,
      language: language,
    };
    const newTrans = this.translationRepository.create(trans);
    return this.translationRepository.save(newTrans);
  }
}
