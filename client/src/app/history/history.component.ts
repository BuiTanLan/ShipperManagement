import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/services/order.service';
import { ShipperService } from '../shared/services/shipper.service';
import { product } from '../shared/models/product';
import {Order} from "../shared/models/order";
import {Shipper} from "../shared/models/shipper";
import {concatMap, of} from "rxjs";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  public  order: Order[]= [];
  public   orderDetail: product[]= [];

  public  user= '';
  public OD =0;
  shipper = null as Shipper | null


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
    ).subscribe(x => console.log('gdg', x));
    this.shipperService.getListOrderByShipper(1).subscribe((data)=>{
      this.order = data;
      console.log(this.order);

    });
  }

  public getOrDetail(){
      this.shipperService.getOrderDetail(1).subscribe((data)=>{
      this.orderDetail = data;
      console.log(this.orderDetail);

    });
  }
}
