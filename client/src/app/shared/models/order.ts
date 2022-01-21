export interface Order {
  id: number;
  userId: number;
  shipperId: number;
  status?: string;
  createAt?: string;
  updateAt?: string;
  detailAddress?: string;
  district?: string;
  province?: string;
}
