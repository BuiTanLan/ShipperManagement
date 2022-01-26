

export interface Order {
  id: number;
  userId: number;
  shipperId: number;
  status?: string;
  createAt?: Date;
  updateAt?: Date;
  detailAddress?: string;
  district?: string;
  province?: string;
  shippingFee : number;
}
