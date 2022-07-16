import express from 'express';
import auth from './middlewares/auth';
import newProductValidation from './middlewares/products.validations';
import orderValidation from './middlewares/order.validation';
import { newUserValidation, loginValidation } from './middlewares/users.validations';
import { getAll, insertNew } from './controller/products.controller';
import { insertNewUser, login } from './controller/users.controller';
import { getAllOrders, newOrder } from './controller/orders.controller';

const routes = express.Router();

routes.route('/products')
  .get(getAll)
  .post(newProductValidation, insertNew);

routes.route('/users')
  .post(newUserValidation, insertNewUser);

routes.route('/orders')
  .get(getAllOrders)
  .post(auth, orderValidation, newOrder);

routes.route('/login')
  .post(loginValidation, login);

export default routes;
