import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailOrderComponent } from './detail-order/detail-order.component';
import { HistoryComponent } from './history/history.component';
import { OrderComponent } from './order/order.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'order', pathMatch: 'full'},
  { path: 'order', component: OrderComponent },
  { path: 'detail', component: DetailOrderComponent },
  {path: 'history', component: HistoryComponent },
  { path: 'user', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
