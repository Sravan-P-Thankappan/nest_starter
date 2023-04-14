import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from 'typeorm'
import { User } from "./user.entity";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }

    createUser(data) {

        // const newUser = new User()
        // newUser.firstName = data.firstName;
        // newUser.lastName = data.lastName;
        // console.log(newUser)
        
        const newUser = this.userRepository.create({
            ...data
        })
        
        this.userRepository.save(newUser)

        // this.userRepository.save(data);
    

    }
   
} 