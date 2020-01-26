import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ServiceService } from './service.service';
import { HttpClientModule } from '@angular/common/http';
import { VoliComponent } from './voli/voli.component';
import { VoliService } from './voli.service';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './modal/modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    VoliComponent,
    LoginComponent,
    ModalComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [ServiceService, VoliService],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]

})
export class AppModule { }
