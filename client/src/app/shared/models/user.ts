export interface Order {
  id: number;
  email: string;
  password: string;
  full_name: string;
  birthday: Date;
  phone: string;
  address: Text;
  avatar_url?: Text;
  role?: number;
  rf_token?: string;
  create_at?: Date;
  update_at?: Date;
}
