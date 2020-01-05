import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductSelected } from '../app/ProductSelected';
@Injectable({
  providedIn: 'root'
})
export class HelperService {
  private parameter = new BehaviorSubject<ProductSelected[]>([]);

  public customMessage = this.parameter.asObservable();

  constructor() { }

  public addToCar(param: any): void {
    this.parameter.next(param);
  }

  public deleteCar(param: any): void {
    this.parameter.next(param = [] );
  }

}
