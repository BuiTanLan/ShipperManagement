import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import {LoginComponent} from "../login/login.component";



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule { }
