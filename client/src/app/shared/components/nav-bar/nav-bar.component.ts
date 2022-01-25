import { Component, OnInit } from '@angular/core';
import {ShipperService} from "../../services/shipper.service";
import {Shipper} from "../../models/shipper";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  shipper = null as Shipper | null;
  constructor(private readonly shipperService: ShipperService) { }

  ngOnInit(): void {
    this.shipperService.currentShipper$.subscribe(shipper =>{
      this.shipper = shipper;
    })
  }
  logout() {
    this.shipperService.logout();
  }

}
