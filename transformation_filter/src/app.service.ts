import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  private heavyMatrixMultiply(size: number): number[][] {
    const A = Array.from({ length: size }, () =>
      Array.from({ length: size }, () => Math.random())
    );
    const B = Array.from({ length: size }, () =>
      Array.from({ length: size }, () => Math.random())
    );
    const result = Array.from({ length: size }, () =>
      Array.from({ length: size }, () => 0)
    );

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        for (let k = 0; k < size; k++) {
          result[i][j] += A[i][k] * B[k][j];
        }
      }
    }

    return result;
  }

}
