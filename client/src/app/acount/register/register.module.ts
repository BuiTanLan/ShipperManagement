import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import {LoginComponent} from "../login/login.component";
import {TextInputModule} from "../../shared/components/text-input/text-input.module";



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    TextInputModule
  ],
  exports: [
    RegisterComponent,
  ]
})
export class RegisterModule { }
