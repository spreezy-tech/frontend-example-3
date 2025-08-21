import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegisterComponent } from './user-register/user-register.component';
import { BusinessRegisterComponent } from './business-register/business-register.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserRegisterComponent
  },
  {
    path: 'business',
    component: BusinessRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
