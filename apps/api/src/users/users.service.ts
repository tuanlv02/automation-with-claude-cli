import { Injectable } from '@nestjs/common';
import { CreateUserDto, QueryUserDto } from './dto';
import { LogActivity } from '@app/app-logger';

@Injectable()
export class UsersService {
  @LogActivity()
  createUser(createUserDto: CreateUserDto) {
    return {
      message: 'User created',
    };
  }

  findUsers(queryUserDto: QueryUserDto) {
    return {
      data: [],
      query: queryUserDto,
    };
  }

  findUserById(userId: string) {
    return {
      message: 'User retrieved successfully',
      user: userId,
    };
  }
}
