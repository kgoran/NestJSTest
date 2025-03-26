import { Controller, Get } from '@nestjs/common';
import { TestingService } from './testing.service';

@Controller('testing')
export class TestingController {
  constructor(private readonly testingService: TestingService) {}

  @Get()
  public test(): Promise<string> {
    return Promise.resolve('live');
  }
}
