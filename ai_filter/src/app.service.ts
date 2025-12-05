import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createHash } from 'crypto';
import { RunRequest } from './types';

@Injectable()
export class AppService {
  private readonly port: number

  constructor(private configService: ConfigService) {
    this.port = this.configService.get<number>('NEXT_PIPE_PORT') || 3002;
  }

  run(body: RunRequest): string {

    const type = body.processingType;
    let parameter: number;

    switch (type) {
      case 'light':
        parameter = 20000;
        break;
      case 'medium':
        parameter = 50000;
        break;
      case 'heavy':
        parameter = 100000;
        break;
      default:
        parameter = 20000;
    }

    const processed = this.expensiveHash(parameter);

    return 'sent';


  }

  private expensiveHash(iterations: number): string {
    let data = 'fake-image-data';

    for (let i = 0; i < iterations; i++) {
      data = createHash('sha256').update(data).digest('hex');
    }

    return data;
  }

}
