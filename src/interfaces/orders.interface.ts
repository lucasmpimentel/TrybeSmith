export interface IOrders {
  id: number;
  userId: number;
}

export interface IOrdersAndProducts {
  id: number;
  userId: number;
  productsIds: number[];
}