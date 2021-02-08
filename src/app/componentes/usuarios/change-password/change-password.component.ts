import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private location: Location) { }
  public isError = false;
  public isSuccess = false;
  public msgError = "";
  public msgSuccess = "";
  aux = this.authService.getCurrentUser();
  datos = {
    dni: this.aux.dni,
    passwordAntiguo: this.aux.dni,
    passwordNuevo: '',
    replyPassword: '',
  }

  ngOnInit() {
  }

  validarPassword() {
    if (this.datos.passwordNuevo == this.datos.replyPassword) {
      this.authService.updatePassword(this.datos).subscribe(usuario => {
        this.msgSuccess = "CONTRASEÑA ACTUALIZADA";
        this.onMsgSuccess();
      },
        res => {
          this.msgError = res.error.message;
          this.onIsError();
        }
      );
      this.router.navigate(["user/inicio"]).then(datos => { location.reload(); });
    } else {
      this.msgError = "LOS DATOS INGRESADOS NO COINCIDEN";
      this.onIsError();
    }

  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
      this.datos.passwordNuevo = '';
      this.datos.replyPassword = '';
    }, 3000);
  }

  onMsgSuccess(): void {
    this.isSuccess = true;
    setTimeout(() => {
      this.isSuccess = false;
      this.datos.passwordNuevo = '';
      this.datos.replyPassword = '';
    }, 2000);
  }

}
