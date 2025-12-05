import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { ValidationPipe } from '@nestjs/common';
import { CreateRequestingMedicineNonIdDto } from 'src/requesting_medicine/dto/create-requesting_medicine.dto';
import { CreateReservationDtoNonid } from 'src/reservations/dto/create-reservation.dto';
import { CreateAnonymousTherapyChatDto } from 'src/anonymous_therapy_chats/dto/create-anonymous_therapy_chat.dto';
import { Roles } from 'src/decorators/roles/roles.decorator';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { RolesGuard } from 'src/guards/auth/roles/roles.guard';
@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientsService.create(createPatientDto);
  }

  @Get()
  @UseGuards(AuthGuard,RolesGuard)
  @Roles(['admin'])
  findAll() {
    return this.patientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.patientsService.findOne(id);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePatientDto: UpdatePatientDto,
  ) {
    return this.patientsService.update(id, updatePatientDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.patientsService.remove(id);
  }
  @Post(':id/reservation')
  createreservation( @Param('id') id: number, @Body() createReservationDtoNonid: CreateReservationDtoNonid  ) {
    return this.patientsService.createreservation(id,  createReservationDtoNonid,);
  }

  @Post(':id/requestMedicine')
  createRequsetMedicine(@Param('id') id: number,@Body() createRequestingMedicineNonIdDto: CreateRequestingMedicineNonIdDto ) {
    return this.patientsService.createRequsetMedicine( id,createRequestingMedicineNonIdDto);
  }

  @Post('requestMedicine')
  createanonymous_therapy_chats(@Body() createAnonymousTherapyChatDto: CreateAnonymousTherapyChatDto ) {
    return this.patientsService.createanonymous_therapy_chats( createAnonymousTherapyChatDto);
  }
  
}
