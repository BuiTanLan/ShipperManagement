import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {ShipperService} from "../services/shipper.service";
import {Shipper} from "../models/shipper";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private readonly shipperService: ShipperService,
              private readonly  router : Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.shipperService.currentShipper$.pipe(
      map((shipper : Shipper | null) => {
        if(!shipper) {
          void this.router.navigateByUrl('/login')
        }
        return !!shipper;
      })
    );
  }

}
