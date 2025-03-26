import { Module } from '@nestjs/common';
import { WebapiService } from './webapi.service';
import { WebapiController } from './webapi.controller';

@Module({
  controllers: [WebapiController],
  providers: [WebapiService],
})
export class WebapiModule {}
