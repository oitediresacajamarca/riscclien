import { Injectable } from '@angular/core';
import { CanActivate,/*  CanActivateChild, CanLoad,  */Router/* , UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree */ } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReportesDiresaGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate() {
    const roles_usuario = this.authService.getRoles_CurrentUser();
    let index = roles_usuario.findIndex(roles => roles.nombre_rol_risc == "Reportes DIRESA.");
    if (index >= 0) {
      return true;
    } else {
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
