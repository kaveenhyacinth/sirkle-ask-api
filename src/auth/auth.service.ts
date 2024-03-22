import {
  BadRequestException,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UserDocument } from '../user/schema/user.schema';
import {
  INVALID_CREDENTIALS,
  USER_ALREADY_EXISTS,
  USER_NOT_FOUND,
} from '../utils/constants';

@Injectable()
export class AuthService {
  constructor(
    @Inject(UserService) private userService: UserService,
    private jwtService: JwtService,
  ) {}

  private async hashPassword(password: string): Promise<string> {
    const saltOrRounds = 2;
    return await bcrypt.hash(password, saltOrRounds);
  }

  private async verifyPassword(
    password: string,
    passwordHash: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, passwordHash);
  }

  private async generateToken(user: UserDocument) {
    const jwtPayload = {
      sub: user._id,
      username: user.username,
      email: user.email,
    };

    return await this.jwtService.signAsync(jwtPayload);
  }

  async register(registerDto: RegisterDto) {
    const { password, ...rest } = registerDto;

    const existingUser = await this.userService.findByEmail(rest.email);
    if (existingUser) throw new BadRequestException(USER_ALREADY_EXISTS);

    const passwordHash = await this.hashPassword(password);

    const user = await this.userService.create({ ...rest, passwordHash });

    return {
      token: await this.generateToken(user),
    };
  }

  async login(loginDto: LoginDto) {
    const user = await this.userService.findByEmail(loginDto.email);
    if (!user) throw new BadRequestException(USER_NOT_FOUND);

    const isPasswordValid = await this.verifyPassword(
      loginDto.password,
      user.passwordHash,
    );
    if (!isPasswordValid) throw new UnauthorizedException(INVALID_CREDENTIALS);

    return {
      token: await this.generateToken(user),
    };
  }
}
