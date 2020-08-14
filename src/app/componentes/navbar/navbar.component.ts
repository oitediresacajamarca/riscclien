import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from "@angular/router";
import { UserI } from 'src/app/interfaces/user';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  public app_name = "RISC";
  public islogged: boolean = false;
  public accessRegister: boolean = false;
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
    this.authService.updateUser(dato).subscribe(usuario => { });
    this.authService.logoutUser();
    this.router.navigate(["home"]).then(datos => location.reload());
  }

  onCheckUser(): void {
    if (this.authService.getCurrentUser() === null) {
      this.islogged = false;
    } else {
      this.islogged = true;
    }
    this.user = this.authService.getCurrentUser();
    if (this.user === null) {
      this.accessRegister = false;
    } else {
      const tipo_ambito = this.user.tipo_ambito;
      if (tipo_ambito == "DEPARTAMENTO" || tipo_ambito == "SUBREGION" || tipo_ambito == "RED") {
        this.accessRegister = true;
      } else {
        this.accessRegister = false;
      }
    }
  }

}
