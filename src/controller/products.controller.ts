import { Request, Response } from 'express';
import { getAllProducts } from '../service/products.service';

export const getAll = async (_req:Request, res:Response) => {
  const result = await getAllProducts();
  res.status(200).json(result);
};

export const getById = async (req:Request, res:Response) => {
  console.log(req, res);
};