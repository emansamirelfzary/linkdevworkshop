import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize} from 'rxjs';
import{NgxSpinnerService}from'ngx-spinner'


@Injectable()
export class loadingInterceptor implements HttpInterceptor {

  constructor(private _ngxspinner:NgxSpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request)
    this._ngxspinner.show()
    return next.handle(request).pipe(finalize(()=>{
this._ngxspinner.hide()
    }));
  }
}


