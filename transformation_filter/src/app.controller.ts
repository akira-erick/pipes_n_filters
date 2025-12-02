import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//Naive Matrix Multiplication
/*
150 light
300 medium
500-600 heavy
*/

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
