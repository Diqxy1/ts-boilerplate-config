import { Router } from 'express';

import CustomersController from '../controller/CustomersController';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';

const customerRouter = Router();

const customersController = new CustomersController();

customerRouter.post('/', isAuthenticated, customersController.create);
customerRouter.get('/', isAuthenticated, customersController.list);

export default customerRouter;
