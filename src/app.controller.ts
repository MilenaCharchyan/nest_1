import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('main')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/data')
  getData() {
    return 'data'
  }

  @Get('/good/:x')
  getGood(@Param("x")x :string, @Query("name") z:string){
    return [ x, z]
  }

  @Post()
  post(@Body()obj){
    return obj
  }
  
}