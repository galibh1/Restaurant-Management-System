import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DeliveryMan } from '../delivery-men/entities/delivery-man.entity';
import { Delivery } from '../deliveries/entities/delivery.entity';
import { Feedback } from '../feedback/entities/feedback.entity';
import { User } from '../auth/entities/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',   
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: '1234',
  database: 'delivery',
  entities: [ DeliveryMan, Feedback, Delivery, User],
  synchronize: true, 
  autoLoadEntities: true,
}
