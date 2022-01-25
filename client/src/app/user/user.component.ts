import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/services/order.service';
import { ShipperService } from '../shared/services/shipper.service';
import { Shipper } from '../shared/models/shipper';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  shipper = {} as Shipper;
  constructor(
  private readonly  shipperService: ShipperService  ){}


  ngOnInit(): void {
    this.shipperService.currentShipper$.subscribe((data)=> {
      if (data){
        this.shipper = data;
      }
    });
}
}
