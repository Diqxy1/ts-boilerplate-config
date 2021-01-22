import { getCustomRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import ProductsRepository from '../typeorm/repositories/ProductsRepository';

interface IRequest {
  id: string;
}

class DeleteProductService {
  public async execute({ id }: IRequest): Promise<void> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new AppError('Product dont exist', 404);
    }

    await productsRepository.remove(product);
  }
}

export default DeleteProductService;
