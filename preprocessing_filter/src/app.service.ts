import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  private generateGaussianKernel(size: number, sigma: number): number[][] {
    const kernel = Array.from({ length: size }, () => Array(size).fill(0));
    const mean = size / 2;
    let sum = 0;

    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        const val =
          Math.exp(
            -0.5 *
              ((Math.pow(x - mean, 2) + Math.pow(y - mean, 2)) /
                Math.pow(sigma, 2))
          ) /
          (2 * Math.PI * Math.pow(sigma, 2));

        kernel[x][y] = val;
        sum += val;
      }
    }

    // Normalize
    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        kernel[x][y] /= sum;
      }
    }

    return kernel;
  }

}
