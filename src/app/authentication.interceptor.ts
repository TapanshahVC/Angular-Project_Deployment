import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { ClubService } from './club.service';
import {Injector} from '@angular/core';


@Injectable({
  providedIn: 'root'
  })
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const auth = this.injector.get(ClubService);
    const tokenvalue = localStorage.getItem('Token');
    const reqToken = req.clone({
       headers: req.headers.set('Authorization', `Bearer ${tokenvalue}`)});
    return next.handle(reqToken);
  }
}
