import { Controller, Get } from '@nestjs/common';
import { MetricsService } from './metrics.service';

@Controller()
export class MetricsController {
  constructor(private readonly routerService: MetricsService) {}

  @Get()
  test1() {
    return 'test3 response';
  }
}
