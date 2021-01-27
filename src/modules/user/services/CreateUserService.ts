import { getCustomRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import { validate } from 'class-validator';

import AppError from '@shared/errors/AppError';
import User, { Gender } from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
  gender: Gender;
  isActive: boolean;
}

class CreateUserService {
  public async execute({
    name,
    email,
    password,
    gender,
    isActive,
  }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const emailExists = await usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email is already', 400);
    }

    const passwordHashed = await bcrypt.hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: passwordHashed,
      gender,
      isActive,
    });

    const erros = await validate(user);

    // working teste line erro this class-validator
    if (erros.length > 0) {
      throw new AppError(`${erros.map(v => v.constraints)}`, 401);
    }

    // Account validation, default false
    if (!isActive) {
      user.isActive = false;
    }

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
