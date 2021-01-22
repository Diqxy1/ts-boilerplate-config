import { Router } from 'express';

import userRouter from '@modules/user/routes/users.routes';
import sessionRouter from '@modules/user/routes/sessions.routes';
import productRouter from '@modules/products/routes/products.routes';
import customerRouter from '@modules/customers/routes/customers.routes';

const routes = Router();

routes.use('/user', userRouter);
routes.use('/login', sessionRouter);
routes.use('/product', productRouter);
routes.use('/customer', customerRouter);

export default routes;
