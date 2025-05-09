// src/delivery-men/delivery-men.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryMenService } from './delivery-men.service';
import { DeliveryMenController } from './delivery-men.controller';
import { DeliveryMan } from './entities/delivery-man.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DeliveryMan])],
  controllers: [DeliveryMenController],
  providers: [DeliveryMenService],
})
export class DeliveryMenModule {}
