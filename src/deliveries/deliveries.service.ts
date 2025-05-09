import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Delivery } from './entities/delivery.entity';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';

@Injectable()
export class DeliveriesService {
  constructor(
    @InjectRepository(Delivery)
    private readonly deliveryRepository: Repository<Delivery>,
  ) {}

  async create(createDeliveryDto: CreateDeliveryDto): Promise<Delivery> {
    const delivery = this.deliveryRepository.create(createDeliveryDto);
    return this.deliveryRepository.save(delivery);
  }

  async findOne(id: number): Promise<Delivery> {
    const delivery = await this.deliveryRepository.findOne({
      where: { id },
      relations: ['deliveryMan'], // Also load deliveryMan relationship
    });
    if (!delivery) {
      throw new Error('Delivery not found');
    }
    return delivery;
  }

  async update(id: number, updateDeliveryDto: UpdateDeliveryDto): Promise<Delivery> {
    await this.deliveryRepository.update(id, updateDeliveryDto);
    const updatedDelivery = await this.deliveryRepository.findOne({
      where: { id },
      relations: ['deliveryMan'],
    });
    if (!updatedDelivery) {
      throw new Error('Delivery not found after update');
    }
    return updatedDelivery;
  }
}
