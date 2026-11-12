import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service.js';

@Controller('user')
export class UserController {
  constructor(readonly userService: UserService) {}
  @Get()
  getUser() {
    return this.userService.getUserData();
  }
}
