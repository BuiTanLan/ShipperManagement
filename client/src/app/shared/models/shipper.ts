export interface Shipper {
  id?: number;
  userId: number
  email: string;
  password: string;
  fullName: string;
  birthday?: string;
  phone: string;
  address?: string;
  avatarUrl?: Text;
  role?: number;
  createAt?: Date;
  updateAt?: Date;
}
