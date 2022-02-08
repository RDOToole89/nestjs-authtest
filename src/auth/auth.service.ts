import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private UsersService: UsersService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.UsersService.findOne(username);

    if (user && user.password === password) {
      const { password, username, ...rest } = user;

      return rest;
    }

    return `User not found`;
  }
}
