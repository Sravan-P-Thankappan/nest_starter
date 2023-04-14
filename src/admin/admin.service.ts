import { Injectable } from "@nestjs/common";

@Injectable()
export class AdminService {



    getAdmin(): string {
        return `this is from both Admin `
    }

}