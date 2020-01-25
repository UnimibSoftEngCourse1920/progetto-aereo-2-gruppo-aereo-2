import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['../app.component.css']
})
export class RegistrationComponent implements OnInit {

  userRegistration ={}
  constructor(private _auth: ServiceService,
              private _router: Router) { }

  ngOnInit() {
   
  }

  registration() {
    this._auth.registration(this.userRegistration)
    .subscribe(
      res => {
        console.log(res)
       // localStorage.setItem('token',res.token)
      },
      err => console.log(err)
    )      
  }

}