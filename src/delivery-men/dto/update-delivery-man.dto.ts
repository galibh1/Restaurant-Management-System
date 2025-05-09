import { PartialType } from '@nestjs/mapped-types';
import { CreateDeliveryManDto } from './create-delivery-man.dto';

export class UpdateDeliveryManDto extends PartialType(CreateDeliveryManDto) {
  
}
