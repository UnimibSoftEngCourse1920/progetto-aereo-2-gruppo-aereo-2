import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { ServiceService } from './service.service';

@Injectable()
export class tokenJWTService implements HttpInterceptor {

  constructor(private injector: Injector){}
  intercept(req, next) {
    let tokenizedReq = req;
    let service = this.injector.get(ServiceService)
    const token = service.getToken();
    if (token != null) {
      tokenizedReq = req.clone({headers: req.headers.set("Authorization", 'Bearer ' + token)});    
    }
    console.log(req.headers.getToken)
    return next.handle(tokenizedReq)
  }

}