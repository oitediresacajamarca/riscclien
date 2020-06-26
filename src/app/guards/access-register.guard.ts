import { Injectable } from '@angular/core';
import { CanActivate,/*  CanActivateChild, CanLoad,  */Router/* , UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree */ } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../servicios/auth.service';
import { UserI } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AccessRegisterGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate() {
    const usuario: UserI = this.authService.getCurrentUser();
    const tipo_ambito = usuario.tipo_ambito;
    if (tipo_ambito == "DEPARTAMENTO" || tipo_ambito == "SUBREGION" || tipo_ambito == "RED") {
      //AMBITO CORRECTO
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
