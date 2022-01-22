export interface Order {
  id: number;
  user_id: string;
  address?: string;
  create_at?: Date;
  update_at?: Date;
}
