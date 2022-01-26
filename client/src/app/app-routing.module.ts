import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailOrderComponent } from './order/detail-order/detail-order.component';
import { HistoryComponent } from './history/history.component';
import { OrderComponent } from './order/order.component';
import { UserComponent } from './user/user.component';
import {LoginComponent} from "./account/login/login.component";
import {RegisterComponent} from "./account/register/register.component";
import {AuthGuard} from "./shared/guards/auth.guard";

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
  { path: 'order',
    component: OrderComponent,
    loadChildren: () => import('./order/order.module').then(m => m.OrderModule),
    canActivate: [AuthGuard],

  },

  { path: 'history',
    component: HistoryComponent,
    canActivate: [AuthGuard],

  },
  { path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard],

  },
  { path: '',
    component: OrderComponent,
    canActivate: [AuthGuard],

  },
  { path: '**', redirectTo: '', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
