import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { RedisOptions } from './configs/app-options.constants';
import { RedisService } from './redis.service';
import { RedisController } from './redis.controller';

@Module({
  imports: [
    CacheModule.registerAsync(RedisOptions),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [RedisController],
  providers: [
    RedisService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class RedisModule {}
