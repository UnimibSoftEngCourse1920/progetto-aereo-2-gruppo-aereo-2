import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IVolo } from "./interface/IVolo";
import { Observable } from 'rxjs';


@Injectable()
export class VoliService {
  
  private _voliAPI = "http://localhost:8080/voli";

  constructor(private http: HttpClient) { }

  getVoli(){
    return this.http.get<any>(this._voliAPI)
  }

}


