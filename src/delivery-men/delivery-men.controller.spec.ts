import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryMenController } from './delivery-men.controller';

describe('DeliveryMenController', () => {
  let controller: DeliveryMenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeliveryMenController],
    }).compile();

    controller = module.get<DeliveryMenController>(DeliveryMenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
