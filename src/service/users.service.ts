import { INewUser } from '../interfaces/users.interface';
import { getUserByName, createNewUser } from '../models/users.models';
import { createToken } from '../utils/token.utils';
import CustomError from '../utils/CustomError';

export const insertNewUserService = async (newUser: INewUser): Promise<string> => {
  const { username, classe, level } = newUser;
  
  const getUser = await getUserByName(username);
  if (getUser.length > 0) throw new CustomError(409, 'Username already in use');

  const id = await createNewUser(newUser);
  const token = createToken(id, username, classe, level);
  return token;
};

export const a = 'a';