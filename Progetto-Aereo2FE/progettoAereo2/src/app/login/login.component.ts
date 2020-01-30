import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { IUser } from '../interface/IUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']
})
export class LoginComponent implements OnInit {

  userLogin : IUser = { username: "", password: ""};

  constructor(private _service: ServiceService,
              private _router: Router) { }

  ngOnInit() {
  }

  login() {
    this._service.login(this.userLogin)
    .subscribe(
      res => {
        localStorage.setItem('jwt', res.jwt)
        this._router.navigate(['/voli'])
      },
      err => console.log(err)
    ) 
  }
}
