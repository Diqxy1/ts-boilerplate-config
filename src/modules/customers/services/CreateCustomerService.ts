import { getCustomRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import Customer from '../typeorm/entities/Customer';
import CustomersRepository from '../typeorm/repositories/CustomersRepository';

/* interface IUser {
  id: string;
  email: string;
} */

interface IRequest {
  name: string;
  email: string;
  //  user: IUser;
}

class CreateCustomerService {
  public async execute({ name, email }: IRequest): Promise<Customer> {
    const customersRepository = getCustomRepository(CustomersRepository);

    const customerExists = await customersRepository.findByEmail(email);

    if (customerExists) {
      throw new AppError('Email is already', 400);
    }

    /* const userExists = await customersRepository.find({
      where: { user: { id: user } },
      relations: ['user'],
    }); */

    //throw console.log(userExists);

    /* if (!userExists) {
      throw new AppError('User dont exist', 200);
    }
 */
    const customer = customersRepository.create({
      name,
      email,
      //user,
    });

    //throw console.log(user_id);

    await customersRepository.save(customer);

    //throw console.log(customer);

    return customer;
  }
}

export default CreateCustomerService;
