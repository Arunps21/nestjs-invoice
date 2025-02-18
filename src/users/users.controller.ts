import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService : UsersService ){}
    @Post("create")
    createUser(@Body() users : CreateUserDto){
        return this.usersService.createUser(users)
    }
}
