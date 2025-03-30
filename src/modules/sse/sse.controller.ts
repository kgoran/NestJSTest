import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Res,
  Sse,
  MessageEvent,
} from '@nestjs/common';
import { SseService } from './sse.service';
import { readFileSync } from 'fs';
import { join } from 'path';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response } from 'express';

@Controller('sse')
export class SseController {
  constructor(private readonly sseService: SseService) {}

  @Get()
  index(@Res() response: Response) {
    response
      .type('text/html')
      .send(readFileSync(join(__dirname, 'index.html')).toString());
  }

  @Sse('keep-alive')
  sse(): Observable<MessageEvent> {
    return interval(1000).pipe(
      map((_) => ({ data: { hello: 'world' } }) as MessageEvent),
    );
  }
}
