import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {OrderComponent} from "./order.component";
import {DetailOrderComponent} from "./detail-order/detail-order.component";
import {AuthGuard} from "../shared/guards/auth.guard";

const routes: Routes = [
    {path: '', component: OrderComponent},
    {
      path: ':id',
      component: DetailOrderComponent,
    },

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
