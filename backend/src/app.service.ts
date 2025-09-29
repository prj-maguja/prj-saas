import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class AppService {
  constructor(private dataSource: DataSource) {}

  async getHello(): Promise<string> {
    const result = await this.dataSource.query('SELECT NOW()');
    return `Hello from backend! Current DB time: ${result[0].now}`;
  }
}