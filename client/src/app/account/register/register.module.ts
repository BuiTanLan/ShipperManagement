import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import {TextInputModule} from "../../shared/components/text-input/text-input.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RegisterRoutingModule} from "./register-routing.module";



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    TextInputModule,
    FormsModule,
    ReactiveFormsModule,
    RegisterRoutingModule
  ],
  exports: [
    RegisterComponent,
  ]
})
export class RegisterModule { }
