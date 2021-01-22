import { Router } from 'express';

import SessionsController from '../controller/SessionsController';
import { signinValidator } from '../validators/session.validators';

const sessionRouter = Router();

const sessionsController = new SessionsController();

sessionRouter.post('/', signinValidator, sessionsController.create);

export default sessionRouter;
