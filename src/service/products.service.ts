import { INewProduct } from '../interfaces/products.interface';
import { getAll, insertNew } from '../models/products.models';

export const getAllProducts = async () => {
  const products = await getAll();
  return products;
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
