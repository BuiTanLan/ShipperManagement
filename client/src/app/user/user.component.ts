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
  public  shippers: Shipper[]= [];
  public shipper = {} as Shipper;

  constructor(
  private common: OrderService,
  private serverHttp: ShipperService  ){}


  ngOnInit(): void {
    this.serverHttp.getShipperId(1).subscribe((data)=>{  ///////////////
      this.shipper = data;
      console.log(this.shipper);
    });
}
}
