import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Shipper } from '../models/shipper';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public OD = 0;

  constructor() {}
  public getOD(id : number){
    this.OD = id;
  }
}
