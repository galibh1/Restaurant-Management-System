import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { DeliveryMan } from '../../delivery-men/entities/delivery-man.entity';

@Entity()
export class Feedback {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  comment: string;

  
  @ManyToOne(() => DeliveryMan, (deliveryMan) => deliveryMan.feedbacks)
  deliveryMan: DeliveryMan;
}
