import { Controller, Get } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller()
export class AdminController {
  constructor(private readonly routerService: AdminService) {}

  @Get()
  test1() {
    return 'test1 response';
  }
}
