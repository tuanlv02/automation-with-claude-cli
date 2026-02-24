import { Injectable } from '@nestjs/common';
import { CreateUserDto, QueryUserDto } from './dto';
import { LogActivity } from '@app/app-logger';
import { JwtPayloadDto } from '@app/auth-utilities';

@Injectable()
export class UsersService {
  @LogActivity()
  createUser(createUserDto: CreateUserDto) {
    return {
      message: 'User created',
    };
  }

  @LogActivity()
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

  getProfile(currentUser: JwtPayloadDto) {
    return {
      message: 'User retrieved successfully',
      currentUser,
    };
  }
}
