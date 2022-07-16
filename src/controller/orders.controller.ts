import { Request, Response } from 'express';
import { getAllOrdersProducts, newOrderService } from '../service/orders.service';

export const getAllOrders = async (_req:Request, res:Response) => {
  const result = await getAllOrdersProducts();
  res.status(200).json(result);
};

export const newOrder = async (req:Request, res:Response) => {
  const { productsIds } = req.body;
  const { user } = req.headers as { user: string };
  const result = await newOrderService(productsIds, user);
  res.status(201).json(result);
}; 