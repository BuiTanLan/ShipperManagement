import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {concatMap, map, Observable, of, ReplaySubject} from 'rxjs';
import {environment} from "../../../environments/environment";
import {Shipper} from "../models/shipper";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})


export class ShipperService {
  private SHIPPER_API_SERVER = environment.SHIPPER_API_SERVER;
  private currentShipperSource =  new ReplaySubject<Shipper | null>(1)
  currentShipper$ = this.currentShipperSource.asObservable();

  constructor(private readonly http: HttpClient,
              private readonly router: Router
  ) {}


  registerShipper(value: any){
    return this.http.post<any>(`${this.SHIPPER_API_SERVER}/shipper`, value).pipe(
      concatMap((res: any) => {
        localStorage.setItem('accessToken', res.accessToken);
        const id = this.parseJwt(res.accessToken).sub.toString();
        return this.getShipperById(id);
      }),
      map((shipper: Shipper | null) => {
        this.currentShipperSource.next(shipper);
        return shipper;
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
    const url = `${this.SHIPPER_API_SERVER}/orders`;
    return this.http
    .get<any>(url);
  }

  getListOrderByShipper(shipperId: number) {
    const url = `${this.SHIPPER_API_SERVER}/orders/${shipperId}`;
    return this.http.get<any>(url);
  }

  getOrderDetail(orderId: number) {
    const url = `${this.SHIPPER_API_SERVER}/orders/` + orderId+ '/detail';
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


  getShipperById(id: string) : Observable<Shipper> {
    const url = `${this.SHIPPER_API_SERVER}/shipper/${id}`;
    return this.http.get<Shipper>(url);
  }

  public getShipperId(orderID: number) {
    const url = `${this.SHIPPER_API_SERVER}/shipper/` + orderID;
    return this.http.get<any>(url);
  }
  logout(){
    localStorage.setItem("accessToken",'');
    this.currentShipperSource.next(null);
    void this.router.navigateByUrl("/login")
  }



  login(value: any) {
    return this.http.post<any>(`${this.SHIPPER_API_SERVER}/shipper/login`, value).pipe(
      concatMap((res: any) => {
        localStorage.setItem('accessToken', res.accessToken);
        const id = this.parseJwt(res.accessToken).sub.toString();
        return this.getShipperById(id);
      }),
      map((shipper: Shipper) => {
        console.log(shipper)
        this.currentShipperSource.next(shipper);
      })
    )
  }


  loadCurrentUser(accessToken: string | null): Observable<any> {
    if (!accessToken) {
      this.currentShipperSource.next(null);
      return of(null);
    }
    const id = this.parseJwt(accessToken).sub.toString();
    return this.getShipperById(id).pipe(
      map((shipper: Shipper) => {
        if (shipper) {
          this.currentShipperSource.next(shipper);
        }
      })
    );
  }
}

