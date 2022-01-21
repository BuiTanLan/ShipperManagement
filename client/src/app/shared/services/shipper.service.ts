import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})


export class ShipperService {
  private SHIPPER_API_SERVER = environment.SHIPPER_API_SERVER;

  constructor(private readonly http: HttpClient) {}


  public getOrder() : Observable<any> {
    const url = `${this.SHIPPER_API_SERVER}/shipper`;
    return this.http
    .get<any>(url);
  }

  public getOrderId(orderId: number) {
    const url = `${this.SHIPPER_API_SERVER}/order/` + orderId;
    return this.http.get<any>(url);
  }

  public getUser() : Observable<any> {
    const url = `${this.SHIPPER_API_SERVER}/users`;
    return this.http.get<any>(url);
  }

  public getUserID(orderID: number) {
    const url = `${this.SHIPPER_API_SERVER}/users/` + orderID;
    return this.http.get<any>(url);
  }


  public getStore() : Observable<any> {
    const url = `${this.SHIPPER_API_SERVER}/store`;
    return this.http.get<any>(url);
  }

  public getStoreID(orderID: number) {
    const url = `${this.SHIPPER_API_SERVER}/store/` + orderID;
    return this.http.get<any>(url);
  }


  public getShipper() : Observable<any> {
    const url = `${this.SHIPPER_API_SERVER}/shipper`;
    return this.http.get<any>(url);
  }

  public getShipperId(orderID: number) {
    const url = `${this.SHIPPER_API_SERVER}/shipper/` + orderID;
    return this.http.get<any>(url);
  }



}

