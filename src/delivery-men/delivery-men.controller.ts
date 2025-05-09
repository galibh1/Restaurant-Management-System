import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeliveryMenService } from './delivery-men.service';
import { CreateDeliveryManDto } from './dto/create-delivery-man.dto';
import { UpdateDeliveryManDto } from './dto/update-delivery-man.dto';

@Controller('delivery-men')
export class DeliveryMenController {
  constructor(private readonly deliveryMenService: DeliveryMenService) {}

  @Post()
  create(@Body() createDeliveryManDto: CreateDeliveryManDto) {
    return this.deliveryMenService.create(createDeliveryManDto);
  }

  @Get()
  findAll() {
    return this.deliveryMenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.deliveryMenService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateDeliveryManDto: UpdateDeliveryManDto) {
    return this.deliveryMenService.update(id, updateDeliveryManDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.deliveryMenService.remove(id);
  }
}
