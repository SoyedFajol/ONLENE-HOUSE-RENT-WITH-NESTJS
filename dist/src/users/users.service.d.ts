import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<UserEntity>);
    signup(userSignUpDto: UserEntity): Promise<UserEntity>;
    signin(userSignInDto: UserEntity): Promise<UserEntity>;
    create(createUserDto: CreateUserDto): string;
    findAll(): Promise<UserEntity[]>;
    findOne(id: number): Promise<UserEntity>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
    findUserByEmail(email: string): Promise<UserEntity>;
    accessToken(user: UserEntity): Promise<string>;
}
