export interface RegisterDto {
  readonly username: string;
  readonly email: string;
  readonly password: string;
}

export type LoginDto = Omit<RegisterDto, 'username'>;
