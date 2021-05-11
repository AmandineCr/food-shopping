import {IProduct} from "./interface.product";

export interface ISearchResponse {
  count: number,
  page: string,
  page_count: number,
  page_size: string,
  products: IProduct[],
  skip: number
}
