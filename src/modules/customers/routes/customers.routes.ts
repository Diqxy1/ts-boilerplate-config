import { Router } from 'express';

import CustomersController from '../controller/CustomersController';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';

const customerRouter = Router();

const customersController = new CustomersController();

customerRouter.post('/', isAuthenticated, customersController.create);
customerRouter.get('/:id', isAuthenticated, customersController.show);
customerRouter.get('/', isAuthenticated, customersController.list);
customerRouter.delete('/:id', isAuthenticated, customersController.delete);
customerRouter.put('/:id', isAuthenticated, customersController.update);

export default customerRouter;
