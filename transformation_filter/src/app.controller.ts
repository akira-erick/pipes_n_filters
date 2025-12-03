import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import type { RunRequest } from './types';

//Naive Matrix Multiplication
/*
150 light
300 medium
500-600 heavy
*/

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/run')
    async run(@Body() body: RunRequest) {
    this.appService.run(body);
    return { received: true };
  }
}
