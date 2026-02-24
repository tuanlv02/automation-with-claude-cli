import { Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { Version } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { Body } from '@nestjs/common';
import { CreateUserDto, QueryUserDto } from './dto';
import { Get } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  @Version('1')
  @ApiOperation({
    summary: 'Create a new user',
    description: 'Create a new user account in the system',
  })
  @ApiOkResponse({
    description: 'User created successfully',
  })
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  @Version('1')
  @ApiOperation({
    summary: 'Get list of users',
    description: 'Retrieve a list of users',
  })
  @ApiOkResponse({
    description: 'Users retrieved successfully',
  })
  findUsers(@Query() query: QueryUserDto) {
    return this.userService.findUsers(query);
  }

  @Get(':id')
  @Version('1')
  @ApiOperation({
    summary: 'Get user by id',
    description: 'Retrieve a user by ID',
  })
  @ApiOkResponse({
    description: 'User retrieved successfully',
  })
  findUserById(@Param('id') userId: string) {
    return this.userService.findUserById(userId);
  }
}
