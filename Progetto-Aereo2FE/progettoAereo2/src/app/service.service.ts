import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class ServiceService {

  private _registrationAPI = "/assets/utente.json";

  constructor(private _router: Router,
    private http: HttpClient) { }

  registration(user) {
    console.log(user)
    return this.http.get<any>(this._registrationAPI, user) //post call
  }
}