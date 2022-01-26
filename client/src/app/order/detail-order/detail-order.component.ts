import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../shared/services/order.service';
import { ShipperService } from '../../shared/services/shipper.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-order',
  templateUrl: './detail-order.component.html',
  styleUrls: ['./detail-order.component.scss']
})
export class DetailOrderComponent implements OnInit {
  orderDetail: any[] = []
  constructor(
    private readonly shipperService: ShipperService,
    private readonly activatedRoute: ActivatedRoute,
    )
   {
   }
  ngOnInit(): void {
    this.loadOrderDetail();
    console.log("hggd", this.activatedRoute.snapshot.paramMap.get('id'))
  }
  loadOrderDetail(){
    this.shipperService.getOrderDetail(Number(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe({
      next: orderDetail => {
        console.log(orderDetail)
        this.orderDetail = orderDetail;
      },
      error: error => console.log(error)
    });
  }

}
