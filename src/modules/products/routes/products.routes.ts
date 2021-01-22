import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import { Router } from 'express';

import ProductsController from '../controller/ProductsController';
import {
  createProductValidator,
  deleteProductValidator,
  showProductValidator,
} from '../validators/products.validators';

const productRouter = Router();

const productController = new ProductsController();

/* create */
productRouter.post(
  '/',
  isAuthenticated,
  createProductValidator,
  productController.create,
);
/* list */
productRouter.get('/', isAuthenticated, productController.list);
/* show */
productRouter.get(
  '/:id',
  showProductValidator,
  isAuthenticated,
  productController.show,
);
/* update */
productRouter.put(
  '/:id',
  deleteProductValidator,
  isAuthenticated,
  productController.update,
);
/* delete */
productRouter.delete(
  '/:id',
  deleteProductValidator,
  isAuthenticated,
  productController.delete,
);

export default productRouter;
