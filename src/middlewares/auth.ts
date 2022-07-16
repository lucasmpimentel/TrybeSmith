import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/token.utils';
import CustomError from '../utils/CustomError';
import { IUserToken } from '../interfaces/users.interface';

const auth = async (req:Request, _res:Response, next: NextFunction) => {
  const { authorization } = req.headers as { authorization: string };
  if (authorization) {
    try {
      const { data } = await verifyToken(authorization) as { data: IUserToken };
      req.headers.user = JSON.stringify(data);
      return next();
    } catch (err) {
      throw new CustomError(401, 'Invalid token');
    }
  }
  throw new CustomError(401, 'Token not found');
};

export default auth;