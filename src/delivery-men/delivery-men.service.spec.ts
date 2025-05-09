import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryMenService } from './delivery-men.service';

describe('DeliveryMenService', () => {
  let service: DeliveryMenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeliveryMenService],
    }).compile();

    service = module.get<DeliveryMenService>(DeliveryMenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
