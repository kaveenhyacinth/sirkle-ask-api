import { EXCEPTIONS } from './constants';
import { BadRequestException, UnauthorizedException } from '@nestjs/common';

export const exceptionHandler = (result: any) => {
  switch (result) {
    case EXCEPTIONS.USER_NOT_FOUND:
      throw new BadRequestException(EXCEPTIONS.USER_NOT_FOUND);
    case EXCEPTIONS.INVALID_CREDENTIALS:
      throw new UnauthorizedException(EXCEPTIONS.INVALID_CREDENTIALS);
    case EXCEPTIONS.USER_ALREADY_EXISTS:
      throw new BadRequestException(EXCEPTIONS.USER_ALREADY_EXISTS);
    default:
      return result;
  }
};
