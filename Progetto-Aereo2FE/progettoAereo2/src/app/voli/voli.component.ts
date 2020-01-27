import { Component, OnInit } from '@angular/core';
import { VoliService } from '../voli.service'
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-voli',
  templateUrl: './voli.component.html',
  styleUrls: ['../app.component.css']
})
export class VoliComponent implements OnInit {
  
  voli = []
  voloFiltro = {}
  constructor(private _voloService: VoliService,
              private _router: Router ) { }

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
    }