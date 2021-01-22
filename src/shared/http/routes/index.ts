import { Router } from 'express';

import userRouter from '@modules/user/routes/users.routes';
import sessionRouter from '@modules/user/routes/sessions.routes';

const routes = Router();

routes.use('/user', userRouter);
routes.use('/login', sessionRouter);

export default routes;
