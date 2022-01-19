import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';
import { shipper } from '../Models/Shipper';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  public  order: shipper[]= [];
  public  user= '';
  constructor(
    private common: CommonService,
    private serverHttp: ServerHttpService  )
     {}

  ngOnInit(): void {
    this.serverHttp.getOrder().subscribe((data)=>{
      this.order = data;
      console.log(this.order);

    });
  }
}
