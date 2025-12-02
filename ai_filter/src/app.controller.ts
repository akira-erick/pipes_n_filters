import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//Expensive Hash Loop
/*
20k light
50k medium
100k+ heavy
*/

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
