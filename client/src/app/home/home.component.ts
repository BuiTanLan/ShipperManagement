import { Component, OnInit } from '@angular/core';
import { ServerHttpService } from '../Services/server-http.service';
import { shipper } from '../Models/Shipper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public  order: shipper[]= [];
  public  user= '';

  constructor(private serverHttp: ServerHttpService) {
  }

  ngOnInit(): void {
    this.serverHttp.getOrder().subscribe((data)=>{
      this.order = data;
      console.log(this.order);

    });

    // this.serverHttp.getUser().subscribe((data)=>{
    //   this.user = data;
    //   console.log(this.order);

    // });
  }


}
