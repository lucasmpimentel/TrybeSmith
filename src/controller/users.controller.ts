import { Request, Response } from 'express';
import { insertNewUserService, loginService } from '../service/users.service';
import { IUser, ILogin } from '../interfaces/users.interface';

export const insertNewUser = async (req:Request, res:Response) => {
  const newUser: IUser = req.body;
  const token: string = await insertNewUserService(newUser);
  res.status(201).json({ token });
};

export const login = async (req:Request, res:Response) => {
  const { username, password }: ILogin = req.body;
  const token = await loginService(username, password);
  res.status(200).json({ token });
};
