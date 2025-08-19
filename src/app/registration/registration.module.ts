import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { UserRegisterComponent } from './user-register/user-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserRegisterComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule, 
    FormsModule // Template driven forms -  static forms
  ], exports: [
    UserRegisterComponent
  ]
})
export class RegistrationModule { }
