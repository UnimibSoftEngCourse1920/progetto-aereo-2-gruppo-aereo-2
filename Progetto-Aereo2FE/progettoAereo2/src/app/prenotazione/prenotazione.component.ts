import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.css']
})
export class PrenotazioneComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

}
