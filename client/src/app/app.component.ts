import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { OrderService } from './shared/services/order.service';
import { ShipperService } from './shared/services/shipper.service';
import jwt_decode, {JwtPayload} from "jwt-decode";

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
    private serverHttp: ShipperService
  ) {}

  ngOnInit(): void {

    // this.common.totalOrder$.subscribe((total) => {
    //   this.totalOrder = total;
    // });
    // if (this.common.totalOrder === 0) {
    //   this.serverHttp.getOrder().subscribe((data) => {
    //     this.common.setTotalOrder(data.length);
    //   });
    // }
  }

  public openLeftSide() {
    this.isOpened = !this.isOpened;
    this.sidenav.toggle();
  }

  public closeLeftSide() {
    this.isOpened = false;
  }
}
