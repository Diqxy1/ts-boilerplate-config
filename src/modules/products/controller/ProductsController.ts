import { Request, Response } from 'express';

import CreateProductService from '../services/CreateProductService';
import DeleteProductService from '../services/DeleteProductService';
import ListProductService from '../services/ListProductService';
import ShowProductService from '../services/ShowProductService';
import UpdateProductService from '../services/UpdateProductService';

export default class ProductsController {
  /*
   * GET /products
   */
  public async list(request: Request, response: Response): Promise<Response> {
    const listProductService = new ListProductService();

    const products = await listProductService.execute();

    return response.json(products);
  }

  /*
   * GET /products/id
   */
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showProductService = new ShowProductService();

    const product = await showProductService.execute({ id });

    return response.json(product);
  }

  /*
   * POST /products
   */
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;

    const createProductService = new CreateProductService();

    const product = await createProductService.execute({
      name,
      price,
      quantity,
    });

    return response.json(product);
  }

  /*
   * PUT /products/id
   */
  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const { name, price, quantity } = request.body;

    const updateProductService = new UpdateProductService();

    const product = await updateProductService.execute({
      id,
      name,
      price,
      quantity,
    });

    return response.json(product);
  }

  /*
   * DELETE /products/id
   */
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteProductService = new DeleteProductService();

    const product = deleteProductService.execute({ id });

    return response.json(product);
  }
}
