import { Router } from 'express';

import UsersController from '../controller/UsersController';
import { userEnableValidator } from '../validators/enable.users.validators';
import { createUserValidator } from '../validators/users.validators';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';

const userRouter = Router();

const usersController = new UsersController();

userRouter.get('/', isAuthenticated, usersController.list);
userRouter.post('/', createUserValidator, usersController.create);
userRouter.put('/:id', userEnableValidator, usersController.enable);

export default userRouter;
