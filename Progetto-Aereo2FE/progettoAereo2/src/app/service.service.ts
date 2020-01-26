import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class ServiceService {

  private _registrationAPI = "localhost:8080/register";
  private _loginAPI = "/assets/utente.json";

  constructor(private _router: Router,
    private http: HttpClient) { }

  registration(user) {
    console.log(user)
    return this.http.post<any>(this._registrationAPI, user) //post call
  }



  login(user) {
    console.log(user)
    return this.http.get<any>(this._loginAPI, user) //post call
  }

}