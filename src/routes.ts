import express from 'express';
import newProductValidation from './middlewares/products.validations';
import { getAll, insertNew } from './controller/products.controller';

const routes = express.Router();

routes.route('/products')
  .get(getAll)
  .post(newProductValidation, insertNew);

export default routes;
