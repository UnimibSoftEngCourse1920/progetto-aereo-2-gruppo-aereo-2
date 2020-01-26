import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { IVolo } from "./interface/IVolo";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VoliService {
  
  private _voliAPI = "./../assets/reservations.json";

  constructor(private _router: Router, 
    private http: HttpClient) { }

  getVoli(): Observable<IVolo[]>{
    return this.http.get<IVolo[]>(this._voliAPI) 
  }

}


