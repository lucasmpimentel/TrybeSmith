import { IOrders } from '../interfaces/orders.interface';
import { IProduct } from '../interfaces/products.interface';
import connection from './connection';

export const getAllOrders = async (): Promise<IOrders[]> => {
  const [orders] = await connection.execute(
    'SELECT * FROM Trybesmith.Orders',
  );
  return orders as IOrders[];
};

export const getOrderById = async (id: number): Promise<IProduct[]> => {
  const [order] = await connection.execute(
    'SELECT * FROM Trybesmith.Products WHERE orderId = ?',
    [id],
  );
  return order as IProduct[];
};