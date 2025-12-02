import { Injectable } from '@nestjs/common';
import { createHash } from 'crypto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  private expensiveHash(iterations: number): string {
    let data = 'fake-image-data';

    for (let i = 0; i < iterations; i++) {
      data = createHash('sha256').update(data).digest('hex');
    }

    return data;
  }

}
