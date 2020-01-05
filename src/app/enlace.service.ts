import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnlaceService {

  private message = new BehaviorSubject<string>('');

  public customMessage = this.message.asObservable();

  constructor() { }

  public changeMessage(msg: string): void {
    this.message.next(msg);
  }
}
