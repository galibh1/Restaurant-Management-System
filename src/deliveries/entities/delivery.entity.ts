import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { DeliveryMan } from '../../delivery-men/entities/delivery-man.entity';

@Entity()
export class Delivery {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column({ default: 'pending' })
  status: string;

  @ManyToOne(() => DeliveryMan, (deliveryMan) => deliveryMan.deliveries, { eager: true })
  deliveryMan: DeliveryMan;
}
