import { Injectable } from '@angular/core';
import {ProductSelected } from '../app/ProductSelected';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelpShopcarService {

  private ProductSelected = new BehaviorSubject<ProductSelected[]>([]);

  public customMessage = this.ProductSelected.asObservable();

  constructor() { }
  productsInCar = [];

  public setCar(quantity: any): void {
    this.productsInCar.push(quantity);
  }

  public resetCar(quantity: any): void {
    return this.productsInCar = quantity;
  }
  public getCounter() {
    return this.productsInCar;
  }

}
