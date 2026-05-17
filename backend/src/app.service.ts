import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth() {
    return {
      status: 'ok',
      service: 'safety-stop-backend',
      timestamp: new Date().toISOString(),
    };
  }
}
