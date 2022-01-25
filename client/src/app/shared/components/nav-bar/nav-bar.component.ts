import { Component, OnInit } from '@angular/core';
import {ShipperService} from "../../services/shipper.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private readonly shipperService: ShipperService) { }

  ngOnInit(): void {
  }
  logout() {
    this.shipperService.logout();
  }

}
