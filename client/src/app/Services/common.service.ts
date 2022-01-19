import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public totalOrder = 0;
  public totalOrder$ = new BehaviorSubject<number>(0);


  constructor() {}

  public setTotalOrder(total: number) {
    this.totalOrder = total;
    this.totalOrder$.next(total);
  }

  public increamentOrder() {
    this.totalOrder++;
    this.totalOrder$.next(this.totalOrder);
  }
}
