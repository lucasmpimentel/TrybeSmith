import { IOrders, IOrdersAndProducts } from '../interfaces/orders.interface';
import { IProduct } from '../interfaces/products.interface';
import { getAllOrders, getOrderById } from '../models/orders.models';

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