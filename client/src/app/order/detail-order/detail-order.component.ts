import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../shared/services/order.service';
import { ShipperService } from '../../shared/services/shipper.service';

@Component({
  selector: 'app-detail-order',
  templateUrl: './detail-order.component.html',
  styleUrls: ['./detail-order.component.scss']
})
export class DetailOrderComponent implements OnInit {

public OD = 0;
  constructor(
    private common: OrderService,
    private serverHttp: ShipperService  )
     {
      this.OD = this.common.OD;
     }
  ngOnInit(): void {  }
  public getOD(id : number){
    this.common.OD = id;
    this.OD = this.common.OD;

  }
}
