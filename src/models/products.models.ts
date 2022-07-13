import { IProduct } from '../interfaces/products.interface';
import connection from './connection';

export const getAll = async ():Promise<IProduct[]> => {
  const [products] = await connection.execute(
    'SELECT * FROM Trybesmith.Products',
  );
  return products as IProduct[];
};

export const getProductById = async (id:number) => {
  console.log(id);
};