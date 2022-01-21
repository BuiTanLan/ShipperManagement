import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailOrderComponent } from './order/detail-order/detail-order.component';
import { HistoryComponent } from './history/history.component';
import { OrderComponent } from './order/order.component';
import { UserComponent } from './user/user.component';
import {LoginComponent} from "./acount/login/login.component";
import {RegisterComponent} from "./acount/register/register.component";

const routes: Routes = [
  { path: '', component: OrderComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'order', component: OrderComponent },
  { path: 'detail', component: DetailOrderComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'user', component: UserComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
