import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IUser } from '../interfaces/users.interface';
import connection from './connection';

export const createNewUser = async (newUser: IUser): Promise<number> => {
  const { username, classe, level, password } = newUser;
  const [user] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUE (?, ?, ?, ?)',
    [username, classe, level, password],
  );
  const { insertId } = user;
  return insertId;
};

export const getUserByName = async (username: string): Promise<RowDataPacket[]> => {
  const [user] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.Users WHERE username = ?',
    [username],
  );
  return user;
};