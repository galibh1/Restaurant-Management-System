import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Feedback } from '../../feedback/entities/feedback.entity';

@Entity()
export class DeliveryMan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  phone: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: 'available' })
  status: string;

 
  @OneToMany(() => Feedback, (feedback) => feedback.deliveryMan)
  feedbacks: Feedback[];
    deliveries: any;
}
