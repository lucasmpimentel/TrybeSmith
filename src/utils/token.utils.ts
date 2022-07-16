import dotenv from 'dotenv';
import jwt, { SignOptions } from 'jsonwebtoken';
import { IUserToken } from '../interfaces/users.interface';

dotenv.config();

const secret = process.env.JWT_SECRET || 'password';
export interface IJwtConfig {
  expiresIn: string;
  algorithm: string;
}
const jwtConfig: IJwtConfig = {
  expiresIn: '5d',
  algorithm: 'HS256',
};

export const createToken = (id:number, username:string, classe:string, level:number): string => (
  jwt.sign({ data: { id, username, classe, level } }, secret, jwtConfig as SignOptions)
);

export const verifyToken = async (token: string) => (
  await jwt.verify(token, secret) as { data: IUserToken }
);