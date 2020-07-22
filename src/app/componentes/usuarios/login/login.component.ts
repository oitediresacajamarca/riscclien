import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/servicios/auth.service";
import { UserI } from "src/app/interfaces/user";
import { Router } from "@angular/router";
import { Location } from '@angular/common'
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private location: Location) { }
  user: UserI = {
    dni: "",
    password: "",
  };
  public isError = false;
  public msgError = "";
  public msg = "";


  ngOnInit() { }

  onLogin(form: NgForm) {
    if (form.valid) {
      return this.authService.login(this.user).subscribe(
        data => {
          const dato: UserI = {
            dni: this.user.dni,
            isLogged: "1",
          }
          this.authService.updateUser(dato).subscribe(usuario => { });
          this.authService.validarPassword(this.user).subscribe(validacion => {
          },
            res => {
              this.msg = res.error.message;
              if (this.msg == "CONTRASEÑA SIN ACTUALIZAR") {
                this.router.navigate(["user/changePassword"]);
              } else {
                this.router.navigate(["user/inicio"]).then(datos => { location.reload(); });
              }
            }
          );
          this.isError = false;
        },
        res => {
          this.msgError = res.error.message;
          this.onIsError();
        }
      );
    } else {
      this.onIsError();
    }
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }

}
