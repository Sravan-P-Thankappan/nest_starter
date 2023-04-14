import { Controller, Get, Post, Req, Res, Body ,Param} from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
 
  @Post('adduser')
  addUser(@Req() request: Request, @Res() response: Response) {

    console.log(request.body)
    response.json({ message: 'created' })
    // return "created"

  }

  @Post('create')
  create(@Body() body) {
        console.log(body)
  }

  @Get(':id')
  getById(@Param() params){
   console.log(params.id)
  }

  // @Get(':id')
  // getById(@Param('id') id:string){
  //  console.log(id)
  // }

}
