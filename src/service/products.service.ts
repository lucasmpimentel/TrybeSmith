import { getAll } from '../models/products.models';
import CustomError from '../utils/CustomError';

export const getAllProducts = async () => {
  const products = await getAll();
  return products;
};

export const getProductsById = async (id: number) => {
  console.log(id);
  if (!id) throw new CustomError(404, 'not found');
};
