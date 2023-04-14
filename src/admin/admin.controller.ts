
import { Controller,Get, Inject } from "@nestjs/common";
import { AdminService } from "./admin.service";

@Controller('admin')
export class AdminController{
    
    // constructor(private adminService:AdminService){}
    
    @Inject(AdminService)
    private adminService:AdminService

    @Get()
    adminRoute():string{
       return this.adminService.getAdmin()
    }
    

}