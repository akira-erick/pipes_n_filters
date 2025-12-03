import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import type { RunRequest } from './types';

//Expensive Hash Loop
/*
20k light
50k medium
100k+ heavy
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
