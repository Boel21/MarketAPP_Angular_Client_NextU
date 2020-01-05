import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Products } from '../app/Products';

import 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  readonly URL_API = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  verifyUser(user, password) {
    return this.http.post(this.URL_API + '/login', {user, password}, {responseType: 'text'});
  }
  getData() {
    return this.http.get<Products[]>(this.URL_API + '/allproducts');
  }

  updateProducts(productsSelected) {
    return this.http.post(this.URL_API + '/updateproducts', {productsSelected}, {responseType: 'text'});
  }
}
