import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';
import { Feedback } from './entities/feedback.entity';
import { DeliveryMan } from '../delivery-men/entities/delivery-man.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Feedback, DeliveryMan])],
  providers: [FeedbackService],
  controllers: [FeedbackController],
})
export class FeedbackModule {}
