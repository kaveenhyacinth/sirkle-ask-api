export interface CreateUserDto {
  readonly username: string;
  readonly email: string;
  readonly passwordHash: string;
}
