import { INewProduct } from '../interfaces/products.interface';
import { getAll, insertNew } from '../models/products.models';
import CustomError from '../utils/CustomError';

export const getAllProducts = async () => {
  const products = await getAll();
  return products;
};

export const getProductsById = async (id: number) => {
  console.log(id);
  if (!id) throw new CustomError(404, 'not found');
};

export const insertNewProduct = async (name:string, amount:string) => {
  const newProductId = await insertNew(name, amount);
  const newProduct:INewProduct = {
    id: newProductId,
    name,
    amount,
  };
  return newProduct;
};
