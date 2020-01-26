import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class ServiceService {

  private _registrationAPI = "http://localhost:8080/register";
  private _loginAPI = "http://localhost:8080/authenticate";

  constructor(private _router: Router,
    private http: HttpClient) { }

  registration(user) {
    return this.http.post<any>(this._registrationAPI, user) //post call
  }

  login(user) {
    return this.http.post<any>(this._loginAPI, user)
  }

  logoutUser() {
    localStorage.removeItem('jwt')
    this._router.navigate(['/login'])
  }

  getToken() {
    return localStorage.getItem('jwt')
  }

  loggedIn() {
    return !!localStorage.getItem('jwt')    
  }

}