import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderRoutingModule} from "./order-routing.module";
import {OrderComponent} from "./order.component";
import {DetailOrderComponent} from "./detail-order/detail-order.component";



@NgModule({
  declarations: [
    OrderComponent,
    DetailOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ],
  exports:[
    OrderComponent,
    DetailOrderComponent
  ]
})
export class OrderModule { }
