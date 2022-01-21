import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class ServerHttpService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
     // Authorization: 'my-auth-token'
    })
  };

  private REST_API_SERVER = "http://localhost:5000";

  constructor(private httpClient: HttpClient) {}


  public getOrder() : Observable<any> {
    const url = `${this.REST_API_SERVER}/shipper`;
    return this.httpClient
    .get<any>(url,this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  public getOrderID(orderID: number) {
    const url = `${this.REST_API_SERVER}/order/` + orderID;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getUser() : Observable<any> {
    const url = `${this.REST_API_SERVER}/users`;
    return this.httpClient
    .get<any>(url,this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  public getUserID(orderID: number) {
    const url = `${this.REST_API_SERVER}/users/` + orderID;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }


  public getStore() : Observable<any> {
    const url = `${this.REST_API_SERVER}/store`;
    return this.httpClient
    .get<any>(url,this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  public getStoreID(orderID: number) {
    const url = `${this.REST_API_SERVER}/store/` + orderID;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }


  public getShipper() : Observable<any> {
    const url = `${this.REST_API_SERVER}/shipper`;
    return this.httpClient
    .get<any>(url,this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  public getShipperID(orderID: number) {
    const url = `${this.REST_API_SERVER}/shipper/` + orderID;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


}

