import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveriesService } from './deliveries.service';
import { DeliveriesController } from './deliveries.controller';
import { Delivery } from './entities/delivery.entity';
import { DeliveryMan } from '../delivery-men/entities/delivery-man.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Delivery, DeliveryMan]),
  ],
  controllers: [DeliveriesController],
  providers: [DeliveriesService],
})
export class DeliveriesModule {}
