import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeliveryMan } from './entities/delivery-man.entity';
import { CreateDeliveryManDto } from './dto/create-delivery-man.dto';
import { UpdateDeliveryManDto } from './dto/update-delivery-man.dto';

@Injectable()
export class DeliveryMenService {
  constructor(
    @InjectRepository(DeliveryMan)
    private readonly deliveryManRepository: Repository<DeliveryMan>,
  ) {}

  async create(createDeliveryManDto: CreateDeliveryManDto): Promise<DeliveryMan> {
    const deliveryMan = this.deliveryManRepository.create(createDeliveryManDto);
    return this.deliveryManRepository.save(deliveryMan);
  }

  async findAll(): Promise<DeliveryMan[]> {
    return this.deliveryManRepository.find();
  }

  async findOne(id: number): Promise<DeliveryMan> {
    const deliveryMan = await this.deliveryManRepository.findOneBy({ id });
    if (!deliveryMan) {
      throw new NotFoundException(`Delivery man with id ${id} not found`);
    }
    return deliveryMan;
  }

  async update(id: number, updateDeliveryManDto: UpdateDeliveryManDto): Promise<DeliveryMan> {
    await this.deliveryManRepository.update(id, updateDeliveryManDto);
    return this.findOne(id);  
  }

  async remove(id: number): Promise<void> {
    const deliveryMan = await this.findOne(id); 
    await this.deliveryManRepository.delete(deliveryMan.id);
  }
}
