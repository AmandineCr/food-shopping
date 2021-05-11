import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SearchResponse} from "../Model/search-response.interface";
import {Product} from "../Model/product.interface";
import {map} from "rxjs/operators";

export enum SearchType {
  all = '',
  // nutriscore_grade = 'nutriscore_grade',
  // prodcut_name = 'product_name'
}

@Injectable({
  providedIn: 'root'
})
export class foodFactService {
  base = 'https://world.openfoodfacts.org';

  /**
   * Constructor of the Service with Dependency Injection
   *
   * @param http The standard Angular HttpClient to make requests
   */
  constructor(private http: HttpClient) {
  }

  /**
   * Get data from the openfoodfacts
   * map the result to return only the results that we need
   *
   * @param {string} name Search Term
   * @param {SearchType} type brand_owner, product_name or empty
   * @returns Observable with the search results
   */
  searchData(name: string, type: SearchType): Observable<SearchResponse> {
    const url = new URL(`cgi/search.pl`, this.base);

    url.searchParams.append('search_terms', name)
    url.searchParams.append('search_simple', '1')
    url.searchParams.append('action', 'process')
    url.searchParams.append('json', 'true')

    return this.http.get<SearchResponse>(url.toString());
  }

  /**
   * Get the detailed information for an ID using the "i" parameter
   *
   * @param id openfoodfactsID to retrieve information
   * @returns Observable with detailed information
   */
  getDetails(id): Observable<Product> {
    return this.http.get<any>(this.url(`product/${id}`)).pipe(
      map(response => response.product)
    );
  }

  url(url): string {
    return new URL(`api/v0/${url}`, this.base).toString();
  }
}
