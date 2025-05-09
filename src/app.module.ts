import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { DeliveryMenModule } from './delivery-men/delivery-men.module';
import { DeliveriesModule } from './deliveries/deliveries.module';
import { FeedbackModule } from './feedback/feedback.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),  // load .env
    DatabaseModule,                            // ← must come before any feature modules
    AuthModule,
    DeliveryMenModule,                         // now has its repository registered
    DeliveriesModule,
    FeedbackModule,
  ],
})
export class AppModule {}
