import {Product} from "./product.interface";

export interface SearchResponse {
  count: number,
  page: string,
  page_count: number,
  page_size: string,
  products: Product[],
  skip: number
}
