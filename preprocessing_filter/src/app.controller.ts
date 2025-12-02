import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//Gaussian Kernel Generation
/*
300 light
800 medium
1200?1500 heavy
*/

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
