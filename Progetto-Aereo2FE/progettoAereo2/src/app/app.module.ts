import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ServiceService } from './service.service';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { VoliComponent } from './voli/voli.component';
import { VoliService } from './voli.service';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './modal/modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { tokenJWTService } from './token-jwt.service';
import { GuardiaGuard } from './guardia.guard';
import { DatePipe } from '@angular/common';



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
  providers: [ServiceService, VoliService, GuardiaGuard, DatePipe, {
    provide: HTTP_INTERCEPTORS,
    useClass: tokenJWTService,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]

})
export class AppModule { }

