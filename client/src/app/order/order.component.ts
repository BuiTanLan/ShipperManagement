import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/services/order.service';
import { ShipperService } from '../shared/services/shipper.service';
import { Shipper } from '../shared/models/shipper';
import {Order} from "../shared/models/order";
import {concatMap, of} from "rxjs";
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  public  orders: any[] = [];
  public  user= '';
  public OD =0;

  constructor(
    private readonly : OrderService,
    private readonly shipperService: ShipperService   )
     {
     }

  ngOnInit(): void {
    this.shipperService.currentShipper$.pipe(
      concatMap((x: Shipper | null) => {
        if(x){

          return this.shipperService.getListOrderByShipper(x.id)
        }
        return of(null);
      })
    ).subscribe(x => this.orders =  x);

  }

}
