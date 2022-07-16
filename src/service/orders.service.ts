import { IOrders, IOrdersAndProducts } from '../interfaces/orders.interface';
import { IProduct } from '../interfaces/products.interface';
import { getAllOrders, getOrderById, newOrder } from '../models/orders.models';
import CustomError from '../utils/CustomError';

export const getAllOrdersService = async (): Promise<IOrders[]> => {
  const orders = await getAllOrders();
  return orders;
};

export const getAllOrdersProducts = async (): Promise<IOrdersAndProducts[]> => {
  const orders = await getAllOrdersService();
  const ordersAndProducts: Promise<IOrdersAndProducts>[] = orders
    .map(async ({ id, userId }) => {
      const products: IProduct[] = await getOrderById(id);
      const getProductsIds: number[] = products.map((product) => product.id);
      return { id, userId, productsIds: getProductsIds };
    });
  const result = await Promise.all(ordersAndProducts);
  return result;
};

export const newOrderService = async (productsIds: number[], userJSON: string) => {
  const user = JSON.parse(userJSON);
  const { id } = user as { id: number };
  const result = await newOrder(id);
  if (result) {
    return { userId: id, productsIds } as IOrdersAndProducts;
  }
  throw new CustomError(500, 'Internal server error');
};