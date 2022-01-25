export interface Shipper {
  id: number;
  userId: number
  email: string;
  password: string;
  fullName: string;
  birthday?: string;
  phone: string;
  address?: string;
  avatarUrl?: string;
  role?: number;
  district: string;
  province: string;
  createAt?: string;
  updateAt?: string;
}
