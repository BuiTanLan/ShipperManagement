import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private readonly http: HttpClient) { }
  // loadCurrentUser(token: string | null): Observable<any> {
  //   if (!token) {
  //     this.currentUserSource.next(null);
  //     return of(null);
  //
  //   return this.http.get<IUser>(`${this.baseUrl}account`, { headers }).pipe(
  //     map((user: IUser) => {
  //       if (user) {
  //         localStorage.setItem('token', user.token);
  //         this.currentUserSource.next(user);
  //         this.isAdminSource.next(this.isAdmin(user.token));
  //
  //       }
  //     })
  //   );
  // }
  //
  //
  //
  // login(value: any) {
  //   return this.http.post<IUser>(this.baseUrl + 'account/login', value).pipe(
  //     map((user: IUser) => {
  //       if (user) {
  //         localStorage.setItem('token', user.token);
  //         this.currentUserSource.next(user);
  //         this.isAdminSource.next(this.isAdmin(user.token));
  //
  //       }
  //     })
  //   );
  // }
  //
  //
  // register(value: any) {
  //   return this.http.post<IUser>(this.baseUrl + 'account/register', value).pipe(
  //     map((user: IUser) => {
  //       if (user) {
  //         localStorage.setItem('token', user.token);
  //         this.currentUserSource.next(user);
  //       }
  //     })
  //   );
  // }
  //
  //
  // logout() {
  //   localStorage.removeItem('token');
  //   void this.router.navigateByUrl('/');
  // }
}
