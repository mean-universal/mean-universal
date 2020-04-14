import { Controller, Get } from '@nestjs/common';

@Controller('health-check')
export class AppController {
  @Get()
  public getHealthCheck() {
    return { message: 'The api is online' };
  }
}
