import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto'; // Ta sẽ tạo file này sau

@Controller('users') // Đường dẫn API sẽ là /users
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post() // Xử lý yêu cầu POST tới /users
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
