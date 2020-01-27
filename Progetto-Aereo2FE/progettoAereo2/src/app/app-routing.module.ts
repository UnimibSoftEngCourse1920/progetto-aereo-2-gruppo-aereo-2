import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component'
import { VoliComponent } from './voli/voli.component' 
import { LoginComponent } from './login/login.component' 
import { ModalComponent } from './modal/modal.component'
import { GuardiaGuard } from './guardia.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
 /* {
    path: 'voli',
    component: VoliComponent
  },*/
  {
    path: 'voli',
    canActivate: [GuardiaGuard],
    component: VoliComponent
  },
  {
    path: 'modal',
    component: ModalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
