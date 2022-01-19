export interface Order {
  id: number;
  user_id: number;
  shipper_id: number;
  status?: string;
  create_at?: Date;
  update_at?: Date;
  detail_address?: string;
  district?: string;
  province?: string;
}
