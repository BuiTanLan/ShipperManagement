import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {concatMap, map, Observable, of} from 'rxjs';
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})


export class ShipperService {
  private SHIPPER_API_SERVER = environment.SHIPPER_API_SERVER;

  constructor(private readonly http: HttpClient) {}


  registerShipper(value: any){
    return this.http.post<string>(`${this.SHIPPER_API_SERVER}/shipper`, value).pipe(
      map((accessToken: string) => {
        if(accessToken) {
          localStorage.setItem('accessToken', accessToken);
          return this.parseJwt(accessToken).sub.toString();
        }
        return null;
      }),
      concatMap((shipperId: string | null) => {
         if(shipperId) {
           return this.getShipperById(shipperId);
         }
         return of(null)
      })

    )
  }

  parseJwt<T extends { sub: number; exp: number }>(token: string): T {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c: string) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join(''),
    );
    return JSON.parse(jsonPayload);
  }

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


  getShipperById(id: string) : Observable<any> {
    const url = `${this.SHIPPER_API_SERVER}/shipper/${id}`;
    return this.http.get<any>(url);
  }

  public getShipperId(orderID: number) {
    const url = `${this.SHIPPER_API_SERVER}/shipper/` + orderID;
    return this.http.get<any>(url);
  }



}

