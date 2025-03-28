import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller()
export class DashboardController {
  constructor(private readonly routerService: DashboardService) {}

  @Get()
  test1() {
    return 'test2 response';
  }
}
