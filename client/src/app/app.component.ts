import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { OrderService } from './shared/services/order.service';
import { ShipperService } from './shared/services/shipper.service';
import {Router} from "@angular/router";
//import jwt_decode, {JwtPayload} from "jwt-decode";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  public isOpened = false;
  public totalOrder = 0;

  constructor(
    private common: OrderService,
    private readonly shipperService: ShipperService,
    public readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loadCurrentUser()
  }
  loadCurrentUser() {
    const token = localStorage.getItem('token');
    this.shipperService.loadCurrentUser(token).subscribe({
      next: () => console.log('load user'),
      error: error => {
        console.log(error);
        void this.router.navigateByUrl("/login")
      }
    });
  }

}
