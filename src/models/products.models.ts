import { ResultSetHeader } from 'mysql2';
import { IProduct } from '../interfaces/products.interface';
import connection from './connection';

export const getAll = async ():Promise<IProduct[]> => {
  const [products] = await connection.execute(
    'SELECT * FROM Trybesmith.Products',
  );
  return products as IProduct[];
};

export const insertNew = async (name: string, amount: string):Promise<number> => {
  const [newRow] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);',
    [name, amount],
  );
  const { insertId } = newRow;
  return insertId;
};