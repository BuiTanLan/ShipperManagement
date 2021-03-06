import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {OrderComponent} from "./order.component";
import {DetailOrderComponent} from "./detail-order/detail-order.component";

const routes: Routes = [
  {
    path: ':id',
    component: DetailOrderComponent,
  },
    {
      path: '',
      component: OrderComponent},


]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
