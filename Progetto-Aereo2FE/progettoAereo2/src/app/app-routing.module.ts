import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component'
import { VoliComponent } from './voli/voli.component' 
import { LoginComponent } from './login/login.component' 
import { ModalComponent } from './modal/modal.component'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'voli',
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
