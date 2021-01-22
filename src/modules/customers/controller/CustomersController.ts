import { Request, Response } from 'express';

import CreateCustomerService from '../services/CreateCustomerService';
import ListCustomerService from '../services/ListCustomerService';

export default class CustomersController {
  /*
   * GET /customer
   */
  public async list(request: Request, response: Response): Promise<Response> {
    const listCustomerService = new ListCustomerService();

    const customer = await listCustomerService.execute();

    return response.json(customer);
  }

  /*
   * POST /customer
   */
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const createCustomerService = new CreateCustomerService();

    const customer = await createCustomerService.execute({
      name,
      email,
    });

    return response.json(customer);
  }
}
