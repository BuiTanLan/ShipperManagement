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
  public  order: shipper[]= [];     ////////////////////////
  public  user= '';
  public OD =1;

  constructor(
    private common: CommonService,
    private serverHttp: ServerHttpService  )
     {
       this.OD = common.OD;
     }

  ngOnInit(): void {
    this.serverHttp.getOrderID(1).subscribe((data)=>{
      this.order = data;
      console.log(this.order);

    });
  }
  public getOD(id : number){
    this.common.OD = id;
    this.OD = this.common.OD;
  }
}
