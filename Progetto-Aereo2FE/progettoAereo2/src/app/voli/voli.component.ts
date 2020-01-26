import { Component, OnInit } from '@angular/core';
import { VoliService } from '../voli.service'
@Component({
  selector: 'app-voli',
  templateUrl: './voli.component.html',
  styleUrls: ['../app.component.css']
})
export class VoliComponent implements OnInit {
  
  voli = []
  voloFiltro = {}
  constructor(private voloService: VoliService) { }

  ngOnInit() {
    
  }
  ricerca(voloFiltro = {}){
    this.voloService.getVoli()
    .subscribe(
      res => this.voli=res,
      err => console.log(err)
    )

  }
}
