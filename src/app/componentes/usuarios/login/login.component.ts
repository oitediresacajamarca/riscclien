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


  ngOnInit() { }

  hideOrShowPassword() {
    var password, check;

    password = document.getElementById("password");
    check = document.getElementById("checkPassword");

    if (check.checked == true) // Si la checkbox de mostrar contraseña está activada
    {
      password.type = "text";
    } else // Si no está activada 
    {
      password.type = "password";
    }
  }

  onLogin(form: NgForm) {
    if (form.valid) {
      return this.authService.login(this.user).subscribe(
        data => {
          const dato: UserI = {
            dni: this.user.dni,
            isLogged: "1",
          }
          this.authService.updateUserLogged(dato).subscribe(usuario => { });
          this.authService.validarPassword(this.user).subscribe(validacion => {
          },
            res => {
              this.msgError = res.error.message;
              if (this.msgError == "CONTRASEÑA SIN ACTUALIZAR") {
                this.onIsError();
                setTimeout(() => {
                  this.router.navigate(["user/changePassword"]);
                }, 2000);
              } else {
                this.router.navigate(["user/inicio"]).then(datos => location.reload());
              }
            }
          );
        },
        res => {
          this.msgError = res.error.message;
          this.onIsError();
        }
      );
    } else {
      this.onIsError();
      this.limpiarFormulario();
    }
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 2000);
  }

  limpiarFormulario(): void {
    this.user.dni = '';
    this.user.password = '';
  }

}
