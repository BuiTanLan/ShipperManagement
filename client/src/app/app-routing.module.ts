import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailOrderComponent } from './order/detail-order/detail-order.component';
import { HistoryComponent } from './history/history.component';
import { OrderComponent } from './order/order.component';
import { UserComponent } from './user/user.component';
import {LoginComponent} from "./account/login/login.component";
import {RegisterComponent} from "./account/register/register.component";

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./account/login/login.module').then(m => m.LoginModule),
    component: LoginComponent
  },
  { path: 'register',
    loadChildren: () => import('./account/register/register.module').then(m => m.RegisterModule),
    component: RegisterComponent
  },
  { path: 'order', component: OrderComponent },
  { path: 'detail', component: DetailOrderComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'user', component: UserComponent },
  { path: '', component: OrderComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
