import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/services/order.service';
import { ShipperService } from '../shared/services/shipper.service';
import { Shipper } from '../shared/models/shipper';
import {Order} from "../shared/models/order";
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  public  order: Order[]= [];
  public  user= '';
  public OD =0;

  constructor(
    private common: OrderService,
    private serverHttp: ShipperService  )
     {
       this.OD = common.OD;
     }

  ngOnInit(): void {
    this.serverHttp.getOrder().subscribe((data)=>{
      this.order = data;
      console.log(this.order);

    });
  }
  public getOD(id : number){
    this.common.OD = id;
    this.OD = this.common.OD;
  }
}
