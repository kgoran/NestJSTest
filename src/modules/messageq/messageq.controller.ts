import { Controller, Get } from '@nestjs/common';
import { MessageqService } from './messageq.service';
//import { MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { MessagePatterns } from '../../common/app.enums';

@Controller('messageq')
export class MessageqController {
  constructor(private readonly messageqService: MessageqService) {}

  /*
  @MessagePattern(MessagePatterns.MAIN)
  sum(data: number[]): number {
    console.log('Receiving ' + data.toString());

    return 1;
  }
    */

  @Get()
  execute(): Observable<number> {
    const data = [1, 2, 3, 4, 5];
    console.log('Sending ' + data.toString());

    return this.messageqService.publish(MessagePatterns.MAIN, data.toString());
  }
}
