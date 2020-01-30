import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IVolo } from "./interface/IVolo";
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';


@Injectable()
export class VoliService {
  private _prenotaAPI = "http://localhost:8080/prenotazione";

  private _voliAPI = "http://localhost:8080/voli";

  constructor(private http: HttpClient) { }

  getVoli(){
    return this.http.get<any>(this._voliAPI)
  }
  prenotazione(username, id, numPosti){
    let o = { "username" : username, "id" : id, "numBiglietti" : numPosti}
    console.log(o)
    return this.http.post<any>(this._prenotaAPI, o)
  }
 
}


