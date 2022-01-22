import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';
import { product } from '../Models/Product';


@Component({
  selector: 'app-detail-order',
  templateUrl: './detail-order.component.html',
  styleUrls: ['./detail-order.component.scss']
})
export class DetailOrderComponent implements OnInit {
  public  products: product[]= [];
  public OD = 0;
  constructor(
    private common: CommonService,
    private serverHttp: ServerHttpService  )
     {
      this.OD = this.common.OD;

     }
  ngOnInit(): void {
    this.serverHttp.getOrderID(this.OD).subscribe((data)=>{
      this.products = data;
      console.log(this.products);

    });
  }

  public getOD(id : number){
    this.common.OD = id;
    this.OD = this.common.OD;
  }

}
