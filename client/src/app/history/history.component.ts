import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/services/order.service';
import { ShipperService } from '../shared/services/shipper.service';
import { product } from '../shared/models/product';
import {Order} from "../shared/models/order";
import {Shipper} from "../shared/models/shipper";
import {OrderProduct} from "../shared/models/oder-product";

import {concatMap, of} from "rxjs";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  public  order: Order[]= [];
  public  orderDetail: product[]= [];
  // public  Detail: OrderProduct[]= [];
  public  idShipper = 1;
  public  user= '';
  public  OD =0;
  shipper = null as Shipper | null
  public money =0;

  constructor(
    private readonly orderService: OrderService,
    private readonly shipperService: ShipperService  )
     { }

  ngOnInit(): void {
    this.shipperService.currentShipper$.pipe(
      concatMap((x: Shipper | null) => {
        if(x){

          return this.shipperService.getListOrderByShipper(x.id)
        }
        return of(null);
      })
    ).subscribe(x => this.idShipper =  x.id);


    this.shipperService.getOrderHistory(this.idShipper).subscribe((data)=>{
      this.order = data;
      console.log(data);
    });
  }

  public getOrDetail(id :number){
  this.shipperService.getOrderDetail(id).subscribe((data)=>{
          this.orderDetail = data;
      console.log(data);

    });
  }
  public GetTotalMoney(money : number){
     this.money = this.money +money;
  }
}
