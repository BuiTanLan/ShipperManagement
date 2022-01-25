import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/services/order.service';
import { ShipperService } from '../shared/services/shipper.service';
import { product } from '../shared/models/product';
import {Order} from "../shared/models/order";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  public  order: Order[]= [];
  // public   orderDetail = {} as Order;
     public   orderDetail: product[]= [];

  public  user= '';
  public OD =0;


  constructor(
    private common: OrderService,
    private serverHttp: ShipperService  )
     { }

  ngOnInit(): void {
    this.serverHttp.getOrderId(1).subscribe((data)=>{
      this.order = data;
      console.log(this.order);

    });
  }

  public getOrDetail(order_id : number){
      this.serverHttp.getOrderDetail(1).subscribe((data)=>{
      this.orderDetail = data;
      console.log(this.orderDetail);

    });
  }
}
