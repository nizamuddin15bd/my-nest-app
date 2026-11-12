import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUserData() {
    return 'User data fetched successfully!!!!!!';
  }
}
