import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { IReservation } from './interface/reservations'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  
  private _reservationAPI = "http://localhost:8080/voli";

  constructor(private _router: Router, 
    private http: HttpClient) { }

  getReservations(): Observable<IReservation[]>{
    return this.http.get<IReservation[]>(this._reservationAPI) 
  }

}


