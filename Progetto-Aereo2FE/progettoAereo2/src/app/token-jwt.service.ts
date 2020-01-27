import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { ServiceService } from './service.service';
@Injectable()
export class tokenJWTService implements HttpInterceptor {

  constructor(private injector: Injector){}
  intercept(req, next) {
    let service = this.injector.get(ServiceService)
    let tokenizedReq = req.clone(
      {
        headers: req.headers.set('Authorization', 'Bearer ' + service.getToken())
      }
    )
    console.log(req.headers.getToken)
    return next.handle(tokenizedReq)
  }

}