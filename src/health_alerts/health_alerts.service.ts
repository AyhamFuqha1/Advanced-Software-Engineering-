import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HealthAlert } from './entities/health_alert.entity';
import { CreateHealthAlertDto } from './dto/create-health_alert.dto';

@Injectable()
export class HealthAlertsService {
  constructor(
    private readonly http: HttpService,
    @InjectRepository(HealthAlert)
    private readonly alertRepo: Repository<HealthAlert>,
  ) {}

 // (1) جلب بيانات كل الدول
  async fetchWHOData() {
    const url = 'https://disease.sh/v3/covid-19/countries';

    const response = await firstValueFrom(
      this.http.get<any[]>(url)
    );

    return response.data; // ← المصفوفة الحقيقية
  }

  // (2) جلب بيانات دولة معينة
  async fetchWHOByCountry(country: string) {
    const url = 'https://disease.sh/v3/covid-19/countries';

    const response = await firstValueFrom(
      this.http.get<any[]>(url)
    );

    const dataArray = response.data;

    const filtered = dataArray.filter(
      (c) => c.country.toLowerCase() === country.toLowerCase()
    );

    if (filtered.length === 0) {
      return { message: `No data found for country: ${country}` };
    }

    return filtered[0]; // نرجع أول نتيجة
  }

  // (3) تخزين بيانات WHO داخل جدول health_alerts
  async syncSpecificCountry(medicalId: number, country: string) {
  // 1. نجيب كل البيانات من WHO API
  const allCountries = await this.fetchWHOData();

  // 2. نفلتر الدولة المطلوبة فقط
  const countryData = allCountries.find(
    (c) => c.country.toLowerCase() === country.toLowerCase(),
  );

  if (!countryData) {
    throw new Error(`Country not found: ${country}`);
  }

  // 3. نخزن الدولة في قاعدة البيانات
  const newAlert = this.alertRepo.create({
    medical_id: medicalId,
    data: JSON.stringify(countryData), // ← فقط دولة واحدة
  });

  return await this.alertRepo.save(newAlert);
}


  // CRUD القديمة تبقى كما هي
  create(dto: CreateHealthAlertDto) {
    const alert = this.alertRepo.create({
      ...dto,
      data: JSON.stringify(dto.data),
    });

    return this.alertRepo.save(alert);
  }

  findAll() {
    return this.alertRepo.find();
  }

  findOne(id: number) {
    return this.alertRepo.findOne({ where: { alert_id: id } });
  }

  update(id: number, dto) {
    return this.alertRepo.update(id, {
      ...dto,
      data: JSON.stringify(dto.data),
    });
  }

  remove(id: number) {
    return this.alertRepo.delete(id);
  }
}
