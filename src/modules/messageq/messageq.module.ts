import { Module } from '@nestjs/common';
import { MessageqService } from './messageq.service';
import { MessageqController } from './messageq.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MAIN_QUEUE } from '../../common/app.constants';
import { ReceiverController } from './receiver.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MAIN_QUEUE,
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: MAIN_QUEUE,
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  controllers: [MessageqController, ReceiverController],
  providers: [MessageqService],
})
export class MessageqModule {}
