export interface IUser {
  username: string;
  classe: string;
  level: number,
  password: string;
}

export interface ILogin {
  username: string;
  password: string;
}

export interface IUserToken {
  id: number;
  username: string;
  classe: string;
  level: number;
}
