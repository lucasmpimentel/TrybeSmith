import { Request, Response } from 'express';
import { getAllOrdersProducts } from '../service/orders.service';

export const getAllOrders = async (_req:Request, res:Response) => {
  const result = await getAllOrdersProducts();
  res.status(200).json(result);
};

export const a = 'a';