import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {ClubService} from './club.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: ClubService, private router: Router) {}
  canActivate(): any {
  //   if (!this.service.gettoken()) {
  //     this.router.navigateByUrl('signin');
  // }
    if (this.service.gettoken()){
      this.service.navbar = false;
  }
    return this.service.gettoken();
}
  }
