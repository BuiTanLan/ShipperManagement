export interface product {
  id: number;
  name: string;
  store_id: number;
  category_id: number;
  url_image: Text;
  short_description: Text;
  full_description: Text;
  price?: number;
  sale_percent?: number;
  rfnumber_token?: number;
  number_sold: number;
  create_at?: Date;
  update_at?: Date;
}
