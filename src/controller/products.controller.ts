import { Request, Response } from 'express';
import { getAllProducts, insertNewProduct } from '../service/products.service';

export const getAll = async (_req:Request, res:Response) => {
  const result = await getAllProducts();
  res.status(200).json(result);
};

export const insertNew = async (req:Request, res:Response) => {
  const { name, amount } = req.body;
  const result = await insertNewProduct(name, amount);
  res.status(201).json(result);
};
