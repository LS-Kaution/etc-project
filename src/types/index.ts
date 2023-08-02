export type Order = {
  id?: string;
  orderNumber?: number;
  client?: string;
  address?: string;
  date?: string;
  subTotal?: number;
  tax?: number;
  total?: number;
}

export type OrderDetail = {
  id: string;
  orderId?: string;
  product?: string;
  quantity?: number;
  price?: number;
  total?: number;
}