import { Test, TestingModule } from '@nestjs/testing';
import { WebapiService } from './webapi.service';

describe('WebapiService', () => {
  let service: WebapiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebapiService],
    }).compile();

    service = module.get<WebapiService>(WebapiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
