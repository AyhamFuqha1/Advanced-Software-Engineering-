import { Module } from '@nestjs/common';
import { InventorsService } from './inventors.service';
import { InventorsController } from './inventors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventor } from './entities/inventor.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Inventor])],
   exports: [InventorsService],
  controllers: [InventorsController],
  providers: [InventorsService],
})
export class InventorsModule {}
