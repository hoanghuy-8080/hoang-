import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto'; // Ta sẽ tạo file này sau
import { UsersStatus } from 'src/common/enums/user.enums';

@Controller('users') // Đường dẫn API sẽ là /users
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Post() // Xử lý yêu cầu POST tới /users
  create(@Body() createUserDto: CreateUserDto) {
    // Ensure 'status' is set before passing to the service
    const userWithStatus = { ...createUserDto, status: UsersStatus.ACTIVE }; // or any default status from UsersStatus enum
    return this.userService.create(userWithStatus);
  }
}
