export interface product {
  id: number;
  name: string;
  store_id: number;
  category_id?: number;
  url_image?: Text;
  short_description?: string;
  full_description?: string;
  price?: number;
  sale_percent?: number;
  number?: number;
  number_sold: number;
  create_at?: Date;
  update_at?: Date;
}
