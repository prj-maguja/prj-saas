import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): Promise<string> {
    console.log("funcion getHello()", new Error().stack.split('\n').slice(0,3));
    return this.appService.getHello();
  }
}
