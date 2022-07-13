import express from 'express';
import { getAll } from './controller/products.controller';

const routes = express.Router();

routes.route('/products')
  .get(getAll);

export default routes;
