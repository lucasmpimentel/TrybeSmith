import { Request, Response } from 'express';
import { insertNewUserService } from '../service/users.service';
import { INewUser } from '../interfaces/users.interface';

export const insertNewUser = async (req:Request, res:Response) => {
  const newUser: INewUser = req.body;
  const result: string = await insertNewUserService(newUser);
  res.status(201).json({ token: result });
};

export const a = 'a';
