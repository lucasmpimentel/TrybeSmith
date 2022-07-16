import { IOrders, IOrdersAndProducts } from '../interfaces/orders.interface';
import { IProduct } from '../interfaces/products.interface';
import CustomError from '../utils/CustomError';
import {
  getAllOrders,
  getOrderById,
  newOrder,
  insertOrderedProducts,
} from '../models/orders.models';

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
  const orderId = await newOrder(id);
  await Promise.all(productsIds.map(async (productId) => {
    await insertOrderedProducts(productId, orderId);
  }));
  if (orderId) {
    return { userId: id, productsIds } as IOrdersAndProducts;
  }
  throw new CustomError(500, 'Internal server error');
};