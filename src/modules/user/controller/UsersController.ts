import { Request, Response } from 'express';

import CreateUserService from '../services/CreateUserService';
import EnableUserService from '../services/EnableUserService';
import ListUserService from '../services/ListUserService';

class UsersController {
  /*
   * GET /users
   */
  public async list(request: Request, response: Response): Promise<Response> {
    const listUserService = new ListUserService();

    const users = await listUserService.execute();

    return response.json(users);
  }

  /*
   * POST /users
   */
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, gender, isActive } = request.body;

    const userCreateService = new CreateUserService();

    const user = await userCreateService.execute({
      name,
      email,
      password,
      gender,
      isActive,
    });

    return response.json(user);
  }
  /*
   * PUT /users/id
   */
  public async enable(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { isActive } = request.body;

    const enableUserService = new EnableUserService();

    const user = await enableUserService.execute({
      id,
      isActive,
    });

    return response.json(user);
  }
}

export default UsersController;
