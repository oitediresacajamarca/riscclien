import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from "@angular/router";
import { UserI } from 'src/app/interfaces/user';
import { CreacionUsuariosGuard } from 'src/app/guards/creacion-usuarios.guard';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private creacion_usuarios: CreacionUsuariosGuard) { }
  public app_name = "RISC";
  public islogged: boolean = false;
  user: UserI;

  ngOnInit() {
    this.onCheckUser();
  }

  onLogout(): void {
    this.user = this.authService.getCurrentUser();
    const dato: UserI = {
      dni: this.user.dni,
      isLogged: "0",
    };
    this.authService.updateUserLogged(dato).subscribe(usuario => { });
    this.authService.logoutUser();
    this.router.navigate(["/"]).then(datos => location.reload());
  }

  onCheckUser(): void {
    this.user = this.authService.getCurrentUser();
    if (this.authService.getCurrentUser() === null) {
      this.islogged = false;
    } else {
      this.islogged = true;
    }
  }

  validarPermiso(): boolean {
    return this.creacion_usuarios.canActivate();
  }

}
