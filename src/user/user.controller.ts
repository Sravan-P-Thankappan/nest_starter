import { Controller,Get,Post ,Body} from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('user')
export class UserController{
    
    constructor(private userService:UserService){}

    @Post()
    addUser(@Body()body){
         
        console.log(body)
        this.userService.createUser(body)
    }
     
    @Get()
    getUser(){
    
    }


}