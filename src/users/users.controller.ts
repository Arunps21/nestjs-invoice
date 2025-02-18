import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-users-dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('create')
  createUser(@Body() users: CreateUserDto) {
    return this.usersService.createUser(users);
  }
  @Get('all')
  getUsers() {
    return this.usersService.getUsers();
  }
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUserById(id);
  }

  @Put(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUser: UpdateUserDto,
  ) {
    return this.usersService.updateUser(id, updateUser);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    try {
      return this.usersService.deleteUser(id);
    } catch (err) {
      console.log(err);
    }
  }
}
