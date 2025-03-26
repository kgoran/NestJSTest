import { Test, TestingModule } from '@nestjs/testing';
import { WebapiController } from './webapi.controller';
import { WebapiService } from './webapi.service';

describe('WebapiController', () => {
  let controller: WebapiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebapiController],
      providers: [WebapiService],
    }).compile();

    controller = module.get<WebapiController>(WebapiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
