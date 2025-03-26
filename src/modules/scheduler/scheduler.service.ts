import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class SchedulerService {
  private readonly logger = new Logger(SchedulerService.name);

  @Cron('7 * * * * *')
  handleCron() {
    this.logger.debug('Called when the current second is 45');
  }

  @Cron(CronExpression.EVERY_5_SECONDS)
  handleCron2() {
    this.logger.debug('Called every 5 seconds');
  }
}
