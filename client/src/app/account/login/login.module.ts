import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {TextInputModule} from "../../shared/components/text-input/text-input.module";
import {ReactiveFormsModule} from "@angular/forms";
import {LoginRoutingModule} from "./login-routing.module";



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    TextInputModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
