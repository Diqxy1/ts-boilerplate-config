import { Request, Response } from 'express';

import CreateCustomerService from '../services/CreateCustomerService';
import DeleteCustomerService from '../services/DeleteCustomerService';
import ListCustomerService from '../services/ListCustomerService';
import ShowCustomerService from '../services/ShowCustomerService';
import UpdateCustomerService from '../services/UpdateCustomerService';

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
   * GET customer/id
   */
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showCustomerService = new ShowCustomerService();

    const customer = await showCustomerService.execute({ id });

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

    // eslint-disable-next-line
    console.log(customer);

    return response.json(customer);
  }

  /*
   * DELETE /customer/id
   */
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteCustomerService = new DeleteCustomerService();

    const customer = await deleteCustomerService.execute({ id });

    return response.json(customer);
  }

  /*
   * PUT /customer/id
   */
  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const { name, email } = request.body;

    const updateCustomerService = new UpdateCustomerService();

    const customer = await updateCustomerService.execute({
      id,
      name,
      email,
    });

    return response.json(customer);
  }
}
