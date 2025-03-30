import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageqModule } from './modules/messageq/messageq.module';
import { RedisModule } from './modules/redis/redis.module';
import { TodoModule } from './modules/todo/todo.module';
//import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { SchedulerModule } from './modules/scheduler/scheduler.module';
import { RouterModule } from './modules/router/router.module';
import { HealthModule } from './modules/health/health.module';
import { WebapiModule } from './modules/webapi/webapi.module';
import { SseModule } from './modules/sse/sse.module';
import { EncryptionModule } from './modules/encryption/encryption.module';

@Module({
  imports: [
    MessageqModule,
    RedisModule,
    TodoModule,
    AuthModule,
    UsersModule,
    SchedulerModule,
    RouterModule,
    HealthModule,
    WebapiModule,
    SseModule,
    EncryptionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
