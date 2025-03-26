import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MessagePatterns } from '../../common/app.enums';

@Controller('receiver')
export class ReceiverController {
  @MessagePattern(MessagePatterns.MAIN)
  sum(data: number[]): number {
    console.log('Receiving ' + data.toString());

    return 1;
  }
}
