import express from 'express';
import newProductValidation from './middlewares/products.validations';
import newUserValidation from './middlewares/users.validations';
import { getAll, insertNew } from './controller/products.controller';
import { insertNewUser } from './controller/users.controller';
import { getAllOrders } from './controller/orders.controller';

const routes = express.Router();

routes.route('/products')
  .get(getAll)
  .post(newProductValidation, insertNew);

routes.route('/users')
  .post(newUserValidation, insertNewUser);

routes.route('/orders')
  .get(getAllOrders);

export default routes;
