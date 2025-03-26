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

@Module({
  imports: [
    MessageqModule,
    RedisModule,
    TodoModule,
    AuthModule,
    UsersModule,
    SchedulerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
