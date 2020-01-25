import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ServiceService } from './service.service';
import { HttpClientModule } from '@angular/common/http';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationService } from './reservation.service';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ServiceService, ReservationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
