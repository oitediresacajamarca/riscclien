import { Injectable } from '@angular/core';
import { CanActivate, /* CanActivateChild, CanLoad, */ Router/* , UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree */ } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate() {
    if (this.authService.getCurrentUser()) {
      //LOGIN TRUE
      return true;
    } else {
      this.router.navigate(['user/login']);
      return false;
    }
  }
  /* canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  } */
}
