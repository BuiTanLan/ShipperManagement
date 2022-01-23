export interface User {
  id?: number;
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
