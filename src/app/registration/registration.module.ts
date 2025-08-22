import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { UserRegisterComponent } from './user-register/user-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BusinessRegisterComponent } from './business-register/business-register.component';
import { EmployeeComponent } from './employee/employee.component';


@NgModule({
  declarations: [
    UserRegisterComponent,
    BusinessRegisterComponent,
    EmployeeComponent
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
