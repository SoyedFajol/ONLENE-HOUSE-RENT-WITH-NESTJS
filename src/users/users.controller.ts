import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserSignUpDto } from './dto/user-signup.dto';
import { User, UserEntity } from './entities/user.entity';
import { UserSignInDto } from './dto/user-signin.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  async signup(@Body() userSignUpDto:UserSignUpDto):Promise<UserEntity>{
    return await this.usersService.signup(userSignUpDto);
    
  }
  @Post('signin')
  async signin(@Body() userSignInDto:UserSignInDto): Promise<{
    accessToken: string;
    user: UserEntity;
}>{
    const user= await this.usersService.signin(userSignInDto);
    const accessToken=await this.usersService.accessToken(user);
    return {accessToken,user};    
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    //return this.usersService.create(createUserDto);
    return 'hi'
  }

  @Get('all')
  async findAll() : Promise<UserEntity[]> {
    return await this.usersService.findAll();
  }

  @Get('id/:id')
  async findOne(@Param('id') id: string): Promise<UserEntity> {
    return await this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
