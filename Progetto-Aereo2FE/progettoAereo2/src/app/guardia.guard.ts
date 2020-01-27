import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ServiceService } from './service.service';

@Injectable()
export class GuardiaGuard implements CanActivate {
  constructor(private _service: ServiceService,
    private _router: Router) { }

  canActivate(): boolean {
    if (this._service.loggedIn()) {
      console.log('true')
      return true
    } else {
      console.log('false')            
      this._router.navigate(['/login'])
      return false
    }
  }
}