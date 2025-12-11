import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateLoginDto, LoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Login } from './entities/login.entity';
import { Repository } from 'typeorm';
import { NotFoundError } from 'rxjs';
import * as jw from 'jsonwebtoken';
@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(Login)
    private readonly loginRepository: Repository<Login>,
  ) {}
  create(createLoginDto: CreateLoginDto) {
    const newLogin = this.loginRepository.create(createLoginDto);
    return this.loginRepository.save(newLogin);
  }

  async login(loginDto: LoginDto) {
    console.log("LOGIN DTO FULL:", loginDto);
    console.log("EMAIL:", loginDto.email);
    console.log("PASSWARD:", loginDto.passward);
    const user  = await this.loginRepository.findOne({
      where: { email: loginDto.email, passward: loginDto.passward },
    });
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const token = jw.sign(
      { id: user.id, email: user.email, role: user.type },
      'mySuperSecretKey123',
      { expiresIn: '1h' },
    );

    return { token };
  }

  findAll() {
    return this.loginRepository.find();
  }

  findOne(id: number) {
    return this.loginRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updateLoginDto: UpdateLoginDto) {
    const find = this.loginRepository.findOne({ where: { id } });
    if (!find) {
      throw new NotFoundException();
    }
    await this.loginRepository.update(id, updateLoginDto);
    return this.loginRepository.findOne({ where: { id } });
  }

  remove(id: number) {
    const find = this.loginRepository.findOne({ where: { id } });
    if (!find) {
      throw new NotFoundException();
    }
    return this.loginRepository.delete(id);
  }
}
