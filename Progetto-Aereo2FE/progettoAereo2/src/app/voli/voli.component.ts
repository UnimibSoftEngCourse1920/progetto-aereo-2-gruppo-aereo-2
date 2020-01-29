import { Component, OnInit } from '@angular/core';
import { VoliService } from '../voli.service'
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { IVolo } from '../interface/IVolo'
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-voli',
  templateUrl: './voli.component.html',
  styleUrls: ['../app.component.css']
})
export class VoliComponent implements OnInit {
  
  voli = []
  filtroVolo : IVolo =  {"id": "", "dataPartenza" : null, "dataArrivo" : null,"partenza": "", "arrivo":"", "numPers": null}

  constructor(private _voloService: VoliService,
              private _router: Router,
              private datePipe: DatePipe ) { }

              ngOnInit() {
                this._voloService.getVoli()
                   .subscribe(
                    res => this.voli = res,
                    err => {
                      if( err instanceof HttpErrorResponse ) {
                        if (err.status === 401) {
                          this._router.navigate(['/login'])
                        }
                      }
                    }
                  ) 
              }

              volofiltro(){
                let voliFilter: IVolo[]=[];
               console.log(!(this.filtroVolo.dataArrivo == null &&
                this.filtroVolo.dataPartenza == null &&
                this.filtroVolo.partenza=="" &&
                this.filtroVolo.arrivo=="" ))

                if(!((this.filtroVolo.dataArrivo == null || 
                  this.datePipe.transform(this.filtroVolo.dataArrivo, 'dd-MM-yyyy')) &&
                  (this.filtroVolo.dataPartenza == null || 
                    this.datePipe.transform(this.filtroVolo.dataPartenza, 'dd-MM-yyyy')) &&
                this.filtroVolo.partenza=="" &&
                this.filtroVolo.arrivo=="") ){
                for (let i = 0; i < this.voli.length; i++){
                if((this.voli[i].aeroportoP.startsWith(this.filtroVolo.partenza))
                    && (this.voli[i].aeroportoD.startsWith(this.filtroVolo.arrivo))
                    && (this.datePipe.transform(this.voli[i].dataPartenza, 'dd-MM-yyyy')==
                    this.datePipe.transform(this.filtroVolo.dataPartenza, 'dd-MM-yyyy')||
                    this.filtroVolo.dataPartenza==null)
                    && (this.datePipe.transform(this.voli[i].dataArrivo, 'dd-MM-yyyy')==
                    this.datePipe.transform(this.filtroVolo.dataArrivo, 'dd-MM-yyyy')||
                    this.filtroVolo.dataArrivo==null)){
                  voliFilter.push(this.voli[i]);
                }
                }
                this.voli=voliFilter;
              }
              }

              
    }