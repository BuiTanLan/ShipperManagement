import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Shipper } from '../models/shipper';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public totalOrder = 0;
  public totalOrder$ = new BehaviorSubject<number>(0);
  public OD = 0;

  constructor() {}

  public setTotalOrder(total: number) {
    this.totalOrder = total;
    this.totalOrder$.next(total);
  }

  public incrementOrder() {
    this.totalOrder++;
    this.totalOrder$.next(this.totalOrder);
  }

  public getOD(id : number){
    this.OD = id;
  }
}
