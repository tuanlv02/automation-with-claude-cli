import { Injectable } from '@nestjs/common';
import { CreateUserDto, QueryUserDto } from './dto';
import { LogActivity } from '@app/app-logger';
import { JwtPayloadDto } from '@app/auth-utilities';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  @LogActivity()
  async createUser(createUserDto: CreateUserDto) {
    const user = await this.prisma.user.create({
      data: createUserDto,
    });

    return {
      message: 'User created',
      user,
    };
  }

  @LogActivity()
  async findUsers(queryUserDto: QueryUserDto) {
    const data = await this.prisma.user.findMany();

    return {
      data,
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
