
export interface Order {
  id: number;
  order_id: number;
  type: number;
  amount?: number;
  data?: string;
  createAt?: Date;
  updateAt?: Date;
}
