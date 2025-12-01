import { Module } from '@nestjs/common';
import { SupportGroupsService } from './support_groups.service';
import { SupportGroupsController } from './support_groups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupportGroup } from './entities/support_group.entity';

@Module({
  imports:[TypeOrmModule.forFeature([SupportGroup])],
  controllers: [SupportGroupsController],
  providers: [SupportGroupsService],
})
export class SupportGroupsModule {}
