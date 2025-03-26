import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MAIN_QUEUE } from '../../common/app.constants';

@Injectable()
export class MessageqService {
  constructor(@Inject(MAIN_QUEUE) private readonly client: ClientProxy) {}

  publish(pattern: string, message: string) {
    return this.client.send<number>(pattern, message);
  }
}
